import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppDataSource } from './data-source';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The API documentation for our NestJS app')
    .setVersion('1.0')
    .addBearerAuth()  // If you're using authentication (e.g., JWT)
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Set up Swagger UI
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 4000);
  try {
    console.log('Initializing database connection...');
    await AppDataSource.initialize();
    console.log('Database connection established');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
}
bootstrap();
