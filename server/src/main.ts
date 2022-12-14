import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Bot } from './Bot';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.useGlobalPipes(new ValidationPipe());

  Bot.instance = new Bot();
  await app.listen(process.env.PORT, () =>
    console.log(`App started on port ${process.env.PORT}`),
  );
}

bootstrap().then();
