import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ReportItem } from './report-item.entity';

export type ReportDocument = HydratedDocument<Report>;

@Schema({ timestamps: true })
export class Report {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  userId: string;
  @Prop({ required: true })
  lang: string;
  @Prop({ required: true, default: 'processing' })
  status: 'processing' | 'completed' | 'failed';
  @Prop({ default: () => new Date() })
  dateGenerated: Date;
  @Prop({
    type: [ReportItem],
    required: true,
    default: [],
  })
  items: ReportItem[];
}

export const ReportSchema = SchemaFactory.createForClass(Report);
