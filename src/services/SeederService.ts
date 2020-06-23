import { Injectable } from '@nestjs/common'
import { InjectPinoLogger, PinoLogger } from "nestjs-pino"

import { UsersService } from "src/services/UsersService"
import { UserList } from 'src/constants/seedData'

@Injectable()
export class SeederService {
  constructor(
    private readonly usersService: UsersService,
    @InjectPinoLogger(SeederService.name)
    protected readonly logger: PinoLogger,
  ) { }

  async seed(): Promise<any> {
    await this.seedUsers()
    this.logger.info("Users seeded")
    return { seed: 'successful' }
  }

  // Seed users
  async seedUsers(
  ): Promise<any> {
    for (const user of UserList) {
      const userExists = await this.usersService.findOneBy("email", user.email)
      if (!userExists) {
        await this.usersService.create(user)
      } else {
        this.logger.info("seedUsers(%o)", { message: "Users already seeded", email: user.email })
      }
    }
  }
}
