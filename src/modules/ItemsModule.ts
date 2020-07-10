import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ItemsController } from '../controllers/ItemsController'
import { ItemsService } from '../services/ItemsService'

import { Item } from '../models/entities/ItemEntity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Item])
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule { }
