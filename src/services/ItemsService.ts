import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Item } from 'src/models/ItemEntity'
import { ItemDto } from 'src/models/dto/ItemDto'

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

  // async findOneBy(field: string, value: string): Promise<Item> {
  //   return await this.itemsRepository.findOne({
  //     where: { [field]: value },
  //   })
  // }

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
