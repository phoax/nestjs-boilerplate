import { Injectable } from '@nestjs/common'
import { InjectPinoLogger, PinoLogger } from "nestjs-pino"

import { UsersService } from "src/services/UsersService"
import { ItemsService } from "src/services/ItemsService"

import { User } from 'src/models/entities/UserEntity'
import { Item } from 'src/models/entities/ItemEntity'

import { UserTestList, ItemTestList } from 'src/test/seedData'

import { UserRoles } from 'src/constants/userRoles'

@Injectable()
export class SeederService {
  constructor(
    private readonly usersService: UsersService,
    private readonly itemsService: ItemsService,
    @InjectPinoLogger(SeederService.name)
    protected readonly logger: PinoLogger,
  ) { }

  async seed(): Promise<any> {
    await this.seedUsers()
    this.logger.info("Users seeded")
    await this.seedItems()
    this.logger.info("Items seeded")
    return { seed: 'successful' }
  }

  // Seed users
  async seedUsers(
  ): Promise<any> {
    for (const userTest of UserTestList) {
      const userExists = await this.usersService.findOneBy("email", userTest.email)
      if (!userExists) {
        const user = new User();
        user.email = userTest.email
        user.password = userTest.password
        user.role = UserRoles[userTest.role]

        await this.usersService.create(user)
      } else {
        this.logger.info("seedUsers(%o)", { message: "User already seeded", email: userTest.email })
      }
    }
  }

  // Seed users
  async seedItems(
  ): Promise<any> {
    for (const itemTest of ItemTestList) {
      const itemExists = await this.itemsService.findOneBy("name", itemTest.name)
      // if (!itemExists) {
      const user = await this.usersService.findOneBy(
        'email',
        itemTest.userEmail,
      )
      console.log('============>')
      console.log(user)
      const item = new Item()
      item.name = itemTest.name
      item.description = itemTest.description
      item.user = user

      await this.itemsService.create(item)
      // } else {
      //   this.logger.info("seedUsers(%o)", { message: "Item already seeded", name: itemTest.name })
      // }
    }
  }

}
