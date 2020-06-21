import { Controller, Get, Put, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiSecurity, ApiTags } from "@nestjs/swagger"

import { AuthService } from 'src/services/AuthService';
import { JwtAuthGuard } from 'src/auth/guards/JwtAuthGuard';

@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiOperation({ summary: "Login to API" })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('signup')
  @ApiOperation({ summary: "Signup to API" })
  signup(@Request() req) {
    return req.user;
  }

  @Post('reset')
  @ApiOperation({ summary: "Request reset password" })
  resetRequest(@Request() req) {
    return req.user;
  }

  @Get('reset/:token')
  @ApiSecurity('jwt')
  @ApiOperation({ summary: "Authorise reset password" })
  resetAuth(@Request() req) {
    return req.user;
  }

  @Put('reset')
  @ApiOperation({ summary: "Reset password" })
  @ApiSecurity('jwt')
  @UseGuards(JwtAuthGuard)
  reset(@Request() req) {
    return req.user;
  }
}
