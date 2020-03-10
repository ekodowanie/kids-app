import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { get } from 'config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { ExceptionsFilter } from './common/errors/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = +get('application.port') || 5000;
  app.useGlobalFilters(new ExceptionsFilter());
  app.setGlobalPrefix(get('application.global_prefix'));
  setupSwagger(app);

  await app.listen(port);
  Logger.log(`Application running on port: ${port}`);
}

function setupSwagger(app) {
  if (process.env.NODE_ENV !== 'production') {
    const options = new DocumentBuilder()
      .setTitle('KidsApp')
      .addBearerAuth()
      .setDescription('KidsApp API description')
      .setVersion('0.1')
      .setBasePath(get('application.global_prefix'))
      .build();

    SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, options));
  }
}

bootstrap().catch(e => {
  Logger.error(e.message || null, e, 'Bootstrap');
});
