import { Injectable } from '@nestjs/common'

export type User = any

@Injectable()
export class ProfileService {
  private readonly users: User[]



  async findOne(username: string): Promise<any> {
    // return this.users.find(user => user.username === username)
  }
}
