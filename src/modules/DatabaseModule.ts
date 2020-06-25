import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: 'postgres',
        entities: [__dirname + '/../**/*Entity{.ts,.js}'],
        synchronize: true,
        keepConnectionAlive: true
      }),
      inject: [ConfigService]
    })
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     type: "postgres",
    //     host: configService.get('database.host'),
    //     port: configService.get('database.port'),
    //     username: configService.get('database.username'),
    //     password: configService.get('database.password'),
    //     database: 'postgres',
    //     entities: [__dirname + '/../**/*Entity{.ts,.js}'],
    //     synchronize: true,
    //     keepConnectionAlive: true
    //   }),
    //   inject: [ConfigService]
    // })
  ]
})
export class DatabaseModule { }
