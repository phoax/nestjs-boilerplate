import { Module } from '@nestjs/common'
import { ConsoleModule } from 'nestjs-console'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config';
// import * as Joi from '@hapi/joi';

import { AuthModule } from './AuthModule'
import { HealthChecksModule } from './HealthCheckModule'
import { GroupsModule } from './GroupsModule'
import { ProfileModule } from './ProfileModule'
import { SeederModule } from './SeederModule'
import { UsersModule } from './UsersModule'

import { AppService } from 'src/services/AppService'
import { CommandsService } from 'src/services/CommandsService'
import { HealthCheckService } from 'src/services/HealthCheckService'

// import database from 'src/database/database'
import configuration from 'src/config/configuration';
import { configSchema } from 'src/validation/configSchema'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: configSchema
    }),
    AuthModule,
    UsersModule,
    GroupsModule,
    ProfileModule,
    HealthChecksModule,
    ConsoleModule,
    SeederModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        entities: [__dirname + '/../**/*Entity{.ts,.js}'],
        synchronize: true,
        keepConnectionAlive: true
      }),
      inject: [ConfigService],
    }),
  ],

  providers: [
    AppService,
    CommandsService,
    HealthCheckService,
  ],
})
export class AppModule { }
