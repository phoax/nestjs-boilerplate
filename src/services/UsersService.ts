import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from 'src/models/UserEntity'
import { UserDto } from 'src/models/dto/UserDto'
import { UserRoles } from 'src/constants/userRoles'

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(userDto: UserDto): Promise<User> {
    const user = new User();
    user.email = userDto.email
    user.password = userDto.password
    user.role = UserRoles[userDto.role]
    const savedUser = await this.usersRepository.save(user)
    return savedUser
  }
}
