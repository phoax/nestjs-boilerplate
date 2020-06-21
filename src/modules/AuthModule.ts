import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from './UsersModule';
import { AuthService } from 'src/services/AuthService';
import { JwtStrategy } from 'src/auth/strategies/JwtStrategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  // TODO
  // add conf for secret
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule { }
