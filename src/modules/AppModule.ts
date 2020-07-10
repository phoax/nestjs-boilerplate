import { Module } from '@nestjs/common'
import { ConsoleModule } from 'nestjs-console'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerModule } from "nestjs-pino"

import { DatabaseModule } from './DatabaseModule'
import { AuthModule } from './AuthModule'
import { HealthChecksModule } from './HealthCheckModule'
import { ItemsModule } from './ItemsModule'
import { ProfileModule } from './ProfileModule'
import { SeederModule } from './SeederModule'
import { UsersModule } from './UsersModule'

import { AppService } from 'src/services/AppService'
import { CommandsService } from 'src/services/CommandsService'
import { HealthCheckService } from 'src/services/HealthCheckService'

import configuration from 'src/config/configuration'
import { configSchema } from 'src/validation/configSchema'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: configSchema
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    ProfileModule,
    ItemsModule,
    HealthChecksModule,
    ConsoleModule,
    SeederModule,
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => (
        {
          pinoHttp:
          {
            level: configService.get('log.level'),
            prettyPrint: configService.get('log.prettyPrint'),
          }
        }
      )
    })
  ],

  providers: [
    AppService,
    CommandsService,
    HealthCheckService,
  ],
})
export class AppModule { }
