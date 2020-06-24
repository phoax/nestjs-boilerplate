import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { hash } from "bcrypt"

import { User } from 'src/models/UserEntity'
import { UserDto } from 'src/models/dto/UserDto'
import { UserRoles } from 'src/constants/userRoles'

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

  async create(userDto: UserDto): Promise<User> {
    const user = new User();
    user.email = userDto.email
    user.password = await hash(userDto.password, 10)
    user.role = UserRoles[userDto.role]
    const savedUser = await this.usersRepository.save(user)
    return savedUser
  }
}
