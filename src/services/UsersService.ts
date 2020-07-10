import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { hash } from "bcrypt"

import { User } from 'src/models/entities/UserEntity'

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async findOneBy(field: string, value: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { [field]: value },
    })
  }

  async findAuth(email: string, password: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { 'email': email, 'password': password },
    })
  }

  async create(user: User): Promise<User> {
    user.password = await hash(user.password, 10)
    const savedUser = await this.usersRepository.save(user)
    return savedUser
  }
}
