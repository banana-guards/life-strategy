import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportItemDocument = HydratedDocument<ReportItem>;

@Schema({ _id: false })
export class ReportItem {
  @Prop({ required: true })
  iaResponse: string;
}

export const ReportItemSchema = SchemaFactory.createForClass(ReportItem);
