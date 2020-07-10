import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Item } from 'src/models/entities/ItemEntity'
import { ItemDto } from 'src/models/dtos/ItemDto'

import { ItemsQueryInterface } from 'src/models/interfaces/ItemsQueryInterface'

@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) { }

  async findOneBy(field: string, value: string): Promise<Item> {
    return await this.itemsRepository.findOne({
      where: { [field]: value },
    })
  }

  async findAll(orderQuery: ItemsQueryInterface): Promise<Item[]> {
    const queryBuilder = this.itemsRepository
      .createQueryBuilder('order')
      .limit(orderQuery.limit)
      .offset(orderQuery.offset)

    return queryBuilder.getMany()
  }


  async create(itemDto: ItemDto): Promise<Item> {
    const item = new Item();
    item.name = itemDto.name
    item.description = itemDto.description
    const savedItem = await this.itemsRepository.save(item)
    return savedItem
  }

  async update(itemDto: ItemDto): Promise<Item> {
    const item = new Item();
    item.name = itemDto.name
    item.description = itemDto.description
    const savedItem = await this.itemsRepository.save(item)
    return savedItem
  }

  async delete(itemDto: ItemDto): Promise<Item> {
    const item = new Item();
    item.name = itemDto.name
    item.description = itemDto.description
    const savedItem = await this.itemsRepository.save(item)
    return savedItem
  }
}
