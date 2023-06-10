import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import {ConfigService}from "./config.service"
@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: '.env', // Path to your .env file
      isGlobal: true, // Makes the configuration module available across your entire application
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class CustomConfigModule  {}
