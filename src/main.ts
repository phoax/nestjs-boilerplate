import { NestFactory } from '@nestjs/core';

import { AppModule } from 'src/modules/AppModule';
import { SwaggerConfig } from 'src/config/SwaggerConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfig.setup(app);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
