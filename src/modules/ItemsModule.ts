import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ItemsController } from 'src/controllers/ItemsController'
import { ItemsService } from 'src/services/ItemsService'

import { Item } from 'src/models/ItemEntity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Item])
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule { }
