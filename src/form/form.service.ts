import { Injectable,HttpException, HttpStatus, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schema/User.schema';
@Injectable()
export class FormService {
  constructor(
    @InjectModel(User.name)
    private formModel: Model<UserDocument>,
  ) {}

  async createForm(form: User): Promise<any> {
    try {
      const createdForm = new this.formModel(form);
      return createdForm.save();
    } catch (err) {
      return err;
    }
  }

  async getFormByUsername(username: string): Promise<any> {
    const fetched = await this.formModel.findOne({ username }).exec();
    if (!fetched) {
      throw new HttpException('No user is present', HttpStatus.NOT_FOUND);
    }
    return fetched;
  }

  async updateForm(username: string, updatedForm: User): Promise<any> {
    const updated = await this.formModel.findOneAndUpdate(
      { username },
      updatedForm,
      {
        new: true,
      },
    );
    if (!updated) {
      throw new HttpException('No user is present', HttpStatus.NOT_FOUND);
    }
    return updated;
  }
}
