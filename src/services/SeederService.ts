import { Injectable } from '@nestjs/common';

// import { UsersService } from "src/services/UsersService";

import { UserList } from 'src/constants/seedData';

export type User = any;

@Injectable()
export class SeederService {
  // private readonly users: User[];
  constructor(
    // private readonly usersService: UsersService,
  ) { }

  async seed(): Promise<any> {
    this.seedUsers()
    return { seed: 'successful' }
  }



  // Seed users and default portfolios
  async seedUsers(
  ): Promise<any> {
    for (const user of UserList) {
      console.log(user)
      // await this.usersService.create()
    }
  }
}
