import { Injectable } from '@nestjs/common';

import { UsersService } from "src/services/UsersService";

import { UserList } from 'src/constants/seedData';

export type User = any;

@Injectable()
export class SeederService {
  // private readonly users: User[];
  constructor(
    private readonly usersService: UsersService,
  ) { }

  async seed(): Promise<any> {
    await this.seedUsers()
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
        //logger
      }
    }
  }
}
