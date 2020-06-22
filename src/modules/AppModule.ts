import { Module } from '@nestjs/common'
import { ConsoleModule } from 'nestjs-console'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from './AuthModule'
import { HealthChecksModule } from './HealthCheckModule'
import { GroupsModule } from './GroupsModule'
import { ProfileModule } from './ProfileModule'
// import { SeederModule } from './SeederModule'
import { UsersModule } from './UsersModule'

import { AppService } from 'src/services/AppService'
import { CommandsService } from 'src/services/CommandsService'
import { HealthCheckService } from 'src/services/HealthCheckService'

// import database from 'src/database/database'

@Module({
  imports: [
    AuthModule,
    UsersModule,
    GroupsModule,
    ProfileModule,
    HealthChecksModule,
    ConsoleModule,
    // SeederModule,
    TypeOrmModule.forRootAsync({
      // imports: [ConfigModule],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Welcome01',
        database: 'postgres',
        entities: [__dirname + '/../**/*Entity{.ts,.js}'],
        synchronize: true,
        keepConnectionAlive: true
      }),
    }),
  ],

  providers: [
    AppService,
    // CommandsService,
    HealthCheckService,
  ],
})
export class AppModule { }
