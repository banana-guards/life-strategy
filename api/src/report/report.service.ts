import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Report } from './entities/report-document.entity';
import { Model } from 'mongoose';
import LANG_MAP from './langs/langMap';
const PDFDocument = require('pdfkit');
import reportEn from './langs/en';
import reportEs from './langs/es';
import { ReportStepsDto } from './dto/report';
import OpenAI from 'openai';

@Injectable()
export class ReportService {
  private openai: OpenAI;

  constructor(
    @InjectModel(Report.name)
    private reportDocumentModel: Model<Report>,
  ) {
    this.openai = new OpenAI({
      apiKey: process.env.IA_API_KEY,
    });
  }

  async iaPromptStepsAnalysis(report: ReportStepsDto, lang: string) {
    const prompts = LANG_MAP[lang].iaPrompts;

    const combinedInput = `
        Responde estrictamente en formato JSON como un arreglo de 7 objetos con esta estructura:

        [
          { "iaResponse": "respuesta del paso 1" },
          { "iaResponse": "respuesta del paso 2" },
          ...
          { "iaResponse": "respuesta del paso 7" }
        ]

        Pasos:

        1) ${prompts[0]}:
        ${report.step1}

        2) ${prompts[1]}:
        ${report.step2}

        3) ${prompts[2]}:
        ${report.step3}

        4) ${prompts[3]}:
        ${report.step4}

        5) ${prompts[4]}:
        ${report.step5}

        6) ${prompts[5]}:
        ${report.step6}

        7) ${prompts[6]}:
        ${report.step7}
        `;

    const response = await this.openai.responses.create({
      model: 'gpt-5-nano',
      input: combinedInput,
    });

    const text = response.output_text;

    try {
      return JSON.parse(text);
    } catch (error) {
      throw new Error('Error parsing AI response');
    }
  }

  async processIA(reportId: any, reportSteps: ReportStepsDto, lang: string) {
    try {
      const iaResult = await this.iaPromptStepsAnalysis(reportSteps, lang);

      await this.reportDocumentModel.findByIdAndUpdate(reportId, {
        items: iaResult,
        status: 'completed',
      });
    } catch (error) {
      await this.reportDocumentModel.findByIdAndUpdate(reportId, {
        status: 'failed',
      });
    }
  }

  async createReport(lang: string, reportSteps: ReportStepsDto, req) {
    const titleReport = 'Life Strategy Report';

    const report = await this.reportDocumentModel.create({
      title: titleReport,
      userId: req.user.id,
      lang,
      items: [],
    });

    const reports = await this.reportDocumentModel
      .find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .skip(5);

    if (reports.length > 0) {
      await this.reportDocumentModel.deleteMany({
        _id: { $in: reports.map((r) => r._id) },
      });
    }

    this.processIA(report._id, reportSteps, lang);

    return { ok: 201 };
  }

  async findReportsByUser(req) {
    return this.reportDocumentModel
      .find({ userId: req.user.id })
      .select(['_id', 'dateGenerated', 'title'])
      .limit(5);
  }

  async getStatusReport(idReport: string) {
    const report = await this.reportDocumentModel.findById(idReport);

    if (!report) {
      throw new Error('Report not found');
    }

    return { status: report.status };
  }

  async createReportPDF(idReport: string, lang: string, res) {
    const report = await this.reportDocumentModel.findById(idReport);

    const script = lang === 'es' ? reportEs : reportEn;

    if (!report) {
      throw new Error('Report not found');
    }

    const doc = new PDFDocument({
      margin: 50,
      size: 'A4',
    });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=life-strategy.pdf');

    doc.pipe(res);

    doc.fontSize(20).text(report.title, { align: 'center' });
    doc.moveDown();
    doc.text(script.intros[0]);
    doc.moveDown();
    doc.text(report.items[0].iaResponse);
    doc.moveDown();
    doc.text(report.items[1].iaResponse);
    doc.moveDown();
    doc.text(script.intros[1]);
    doc.moveDown();
    doc.text(report.items[2].iaResponse);
    doc.moveDown();
    doc.text(report.items[3].iaResponse);
    doc.moveDown();
    doc.text(script.intros[2]);
    doc.moveDown();
    doc.text(report.items[4].iaResponse);
    doc.moveDown();
    doc.text(script.intros[3]);
    doc.moveDown();
    doc.text(report.items[5].iaResponse);
    doc.moveDown();
    doc.text(script.intros[4]);
    doc.moveDown();
    doc.text(script.intros[5]);
    doc.moveDown();
    doc.text(report.items[5].iaResponse);
    doc.moveDown();
    doc.text(script.intros[6]);

    doc.end();
  }
}
