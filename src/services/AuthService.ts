import {
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare, hash } from "bcrypt"

import { UsersService } from './UsersService'
import { UserDto } from 'src/models/dto/UserDto'


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findOneBy('email', email)
    if (!user) {
      throw new HttpException("Unknow user", HttpStatus.BAD_REQUEST)
    }

    return user
  }

  async login(userDto: UserDto) {
    const user = await this.usersService.findOneBy('email', userDto.email)
    if (!user) {
      throw new HttpException("Unknow user", HttpStatus.BAD_REQUEST)
    }
    const passwordVerified = await compare(userDto.password, user.password)
    if (!passwordVerified) {
      throw new HttpException("Wrong password", HttpStatus.UNAUTHORIZED)
    }

    const payload = { email: user.email }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
