import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // Limpia lo que no es necesario de un JSON
      whitelist: true,
      // Muestra un error en caso que hayan propiedades que no existan en el JSON
      // forbidNonWhitelisted: true
    }),
  );

  await app.listen(3000);
}
main()
