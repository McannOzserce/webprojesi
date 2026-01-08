import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // İŞTE BU SATIR EKSİKSE FRONTEND VERİ ÇEKEMEZ!
  app.enableCors(); 

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, 
  }));
  
  await app.listen(3000);
}
bootstrap();