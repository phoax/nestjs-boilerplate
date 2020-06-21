import { Controller, Delete, Get, Post, Put, Request, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger"

import { AuthService } from 'src/services/AuthService';
import { JwtAuthGuard } from 'src/auth/guards/JwtAuthGuard';
import { AdminGuard } from "src/auth/guards/AdminGuard"

@ApiTags("users")
@Controller('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@UseGuards(AdminGuard)
export class UsersController {
  constructor(private readonly authService: AuthService) { }

  @Get()
  @ApiOperation({ summary: "Get user list" })
  @ApiQuery({
    name: "offset",
    description: "From the desired program to return",
    required: false,
    type: Number
  })
  @ApiQuery({
    name: "limit",
    description: "The maximum number of programs to return",
    required: false,
    type: Number
  })
  findAll(
    @Query('offset') offset,
    @Query('limit') limit,
  ) {
    // return req.user;
  }

  @Get('/:id')
  @ApiOperation({ summary: "Get an user" })
  findOne(@Request() req) {
    return req.user;
  }

  @Post()
  @ApiOperation({ summary: "Create an user" })
  async create(@Request() req) {
    return this.authService.login(req.user);
  }

  @Put('/:id')
  @ApiOperation({ summary: "Update an user" })
  async update(@Request() req) {
    return req.user;
  }

  @Delete('/:id')
  @ApiOperation({ summary: "Delete an user" })
  async delete(@Request() req) {
    return req.user;
  }
}
