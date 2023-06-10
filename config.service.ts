import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly nestConfigService: NestConfigService) {}

  get(key: string): string {
    return this.nestConfigService.get<string>(key);
  }

  validateEnvVariables(): void {
    const envVariables = ['MONGODB_URI'];
    envVariables.forEach((variable) => {
      if (!this.nestConfigService.get(variable)) {
        throw new Error(`Missing required environment variable: ${variable}`);
      }
    });
  }
}
