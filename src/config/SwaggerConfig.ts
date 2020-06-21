import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'

export class SwaggerConfig {
    static setup(app: INestApplication): void {
        const options = new DocumentBuilder()
            .setTitle('Plantomatic API')
            .build();
        const document = SwaggerModule.createDocument(app, options)
        SwaggerModule.setup('/', app, document)
    }
}
