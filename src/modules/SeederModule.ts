import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { SeederService } from 'src/services/SeederService'
import { UsersModule } from 'src/modules/UsersModule'
import { ItemsModule } from 'src/modules/ItemsModule'

@Module({
  imports: [
    UsersModule,
    ItemsModule,
    ConfigModule,
  ],
  providers: [
    SeederService,
  ],
  exports: [SeederService],
})
export class SeederModule { }
