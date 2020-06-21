import { Injectable } from '@nestjs/common';
import { UsersService } from './UsersService';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
    return { username: "toto", sub: 42 }
  }

  async login(user: any) {
    const payload = { username: "toto", sub: 42 };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
