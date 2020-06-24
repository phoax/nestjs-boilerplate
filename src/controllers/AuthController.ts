import { Controller, Body, Get, Put, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger'

import { AuthService } from 'src/services/AuthService';
import { JwtAuthGuard } from 'src/auth/guards/JwtAuthGuard';
import { UserDto } from 'src/models/dto/UserDto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  async login(@Body() userDTO: UserDto) {
    return this.authService.login(userDTO);
  }

  @Post('signup')
  @ApiOperation({ summary: 'Signup' })
  signup(@Request() req) {
    return req.user;
  }

  @Get('validate/:token')
  @ApiSecurity('jwt')
  @ApiOperation({ summary: 'Validate email' })
  validate(@Request() req) {
    return req.user;
  }

  @Post('reset')
  @ApiOperation({ summary: 'Request reset password' })
  resetRequest(@Request() req) {
    return req.user;
  }

  @Get('reset/:token')
  @ApiSecurity('jwt')
  @ApiOperation({ summary: 'Authorise reset password' })
  resetAuth(@Request() req) {
    return req.user;
  }

  @Put('reset')
  @ApiOperation({ summary: 'Reset password' })
  @ApiSecurity('jwt')
  @UseGuards(JwtAuthGuard)
  reset(@Request() req) {
    return req.user;
  }
}
