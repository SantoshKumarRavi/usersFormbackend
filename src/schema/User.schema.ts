import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
export type UserDocument = User & Document;
 
@Schema()
export class User {
  @Prop()
  username: string;
 
  @Prop()
  phoneNumber: number;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  dateOfBirth: Date;
}
 
export const UserSchema = SchemaFactory.createForClass(User);