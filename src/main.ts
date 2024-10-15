import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger 문서 설정
  const config = new DocumentBuilder()
    .setTitle('스웨거')
    .setDescription('화이트클리닉 Swagger')
    .setVersion('최신버전')
    .addTag('화이트클리닉의 모든 경로')
    .build();

  //Swagger 문서 생성
  const document = SwaggerModule.createDocument(app, config);

  //Swagger UI 설정, '/api' 경로에서 문서 접근
  SwaggerModule.setup('api', app, document);

  // 유효성 검사 파이프 라인
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors(); //리소는 접근 허용(보안)
  await app.listen(9090);
}
bootstrap();
