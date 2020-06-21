import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger"

import { AuthService } from 'src/services/AuthService';
import { JwtAuthGuard } from 'src/auth/guards/JwtAuthGuard';

@ApiTags("profile")
@Controller('profile')
export class ProfileController {
  constructor(private readonly authService: AuthService) { }

  @Get()
  @ApiOperation({ summary: "Get user profile" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
