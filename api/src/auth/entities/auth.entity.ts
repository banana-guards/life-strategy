import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
export class Auth {
  @Prop({ required: true })
  provider: string;

  @Prop({ required: true })
  providerId: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  picture: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
