import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schema/User.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomConfigModule } from '../../config.module';
@Module({
  imports: [
    CustomConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
