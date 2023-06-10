import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { User } from '../schema/User.schema';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async createForm(@Body() form: User): Promise<any> {
    try {
      const createdForm = await this.formService.createForm(form);
      return createdForm;
    } catch (err) {
      return err.message;
    }
  }

  @Get(':username')
  async getFormByUsername(@Param('username') username: string): Promise<any> {
    const fetchedForm = await this.formService.getFormByUsername(username);
    return fetchedForm;
  }
  @Put(':username')
  async updateForm(
    @Param('username') username: string,
    @Body() updatedForm: User,
  ): Promise<any> {
    return this.formService.updateForm(username, updatedForm);
  }
}
