import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from 'src/modules/AppModule';
import { SwaggerConfig } from 'src/config/SwaggerConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  SwaggerConfig.setup(app);
  await app.listen(configService.get('port'));
  console.log(`Application is running on: ${await app.getUrl()}, env: ${configService.get('env')}`);
}
bootstrap();