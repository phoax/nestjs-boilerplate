import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'

import { ConfigService } from '@nestjs/config'

export class SwaggerConfig {
    static setup(app: INestApplication): void {
        const configService = app.get(ConfigService)
        const options = new DocumentBuilder()
            .setTitle(configService.get('name'))
            .build();
        const document = SwaggerModule.createDocument(app, options)
        SwaggerModule.setup('/', app, document)
        // TODO https://github.com/Redocly/redoc#swagger-vendor-extensions
    }
}
