import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true,
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true});

  await app.listen(process.env.PORTA ?? 3000);
}


bootstrap();
