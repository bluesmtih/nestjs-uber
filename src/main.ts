import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import swaggerConfig from '@config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //配置swagger
  const config = new DocumentBuilder()
    .setTitle(swaggerConfig.title)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //监听3000端口
  await app.listen(3000);
}
bootstrap();
