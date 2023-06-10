import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
    // Configure CORS options
    const corsOptions = {
      origin: '*', // Allow requests from any origin
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Set the allowed HTTP methods
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true, // Set to true if you need to allow credentials (cookies, authorization headers, etc.)
    };
    app.enableCors(corsOptions);

  await app.listen(3001);
}
bootstrap();
