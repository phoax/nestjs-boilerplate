import {
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'


import { AuthService } from "src/services/AuthService"
import { ConfigService } from '@nestjs/config'
import { User } from "src/models/UserEntity"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('secretKey'),
    })
  }

  async validate(payload: any): Promise<User> {
    const user: User = await this.authService.validateUser(payload.email)
    if (!user) {
      throw new HttpException("Unknow user", HttpStatus.UNAUTHORIZED)
    }
    return user
  }
}
