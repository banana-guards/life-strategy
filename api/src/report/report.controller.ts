import { Controller, Post } from '@nestjs/common';
import { ReportService } from './report.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
  Body,
  Get,
  Param,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common/decorators';
import { ReportStepsDto } from './dto/report';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post(':lang')
  @UseGuards(JwtAuthGuard)
  createReport(
    @Param('lang') lang: string,
    @Req() req,
    @Body() reportDto: ReportStepsDto,
  ) {
    return this.reportService.createReport(lang, reportDto, req);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findReportsByUser(@Req() req) {
    return this.reportService.findReportsByUser(req);
  }

  @Get('status/:idReport')
  getStatusReport(@Param('idReport') idReport: string) {
    return this.reportService.getStatusReport(idReport);
  }

  @Get('pdf/:idReport/:lang')
  createPDF(
    @Param('idReport') idReport: string,
    @Param('lang') lang: string,
    @Res() res,
  ) {
    return this.reportService.createReportPDF(idReport, lang, res);
  }
}
