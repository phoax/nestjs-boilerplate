import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

// import { UsersService } from './UsersModule';
import { AuthController } from 'src/controllers/AuthController';
import { AuthService } from 'src/services/AuthService';
// import { UsersService } from 'src/services/UsersService';
import { JwtStrategy } from 'src/auth/strategies/JwtStrategy';

@Module({
  imports: [
    // UsersService,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  // TODO
  // add conf for secret
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule { }
