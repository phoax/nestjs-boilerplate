import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger"
import { InjectPinoLogger, PinoLogger } from "nestjs-pino"

import { AuthService } from '../services/AuthService';
import { JwtAuthGuard } from '../auth/guards/JwtAuthGuard';

@ApiTags("profile")
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly authService: AuthService,
    @InjectPinoLogger(ProfileController.name)
    protected readonly logger: PinoLogger,
  ) { }

  @Get()
  @ApiOperation({ summary: "Get user profile" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    this.logger.info("getProfile(%o)", { message: "Get user profile" })
    return req.user;
  }
}
