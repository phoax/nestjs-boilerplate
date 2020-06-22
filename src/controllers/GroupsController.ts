import { Controller, Delete, Get, Post, Put, Request, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger"

import { AuthService } from 'src/services/AuthService';
import { JwtAuthGuard } from 'src/auth/guards/JwtAuthGuard';
import { AdminGuard } from "src/auth/guards/AdminGuard"

@ApiTags("groups")
@Controller('groups')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@UseGuards(AdminGuard)
export class GroupsController {
  constructor(private readonly authService: AuthService) { }

  @Get()
  @ApiOperation({ summary: "Get group list" })
  @ApiQuery({
    name: "offset",
    description: "From the desired group to return",
    required: false,
    type: Number
  })
  @ApiQuery({
    name: "limit",
    description: "The maximum number of groups to return",
    required: false,
    type: Number
  })
  findAll(
    @Query('offset') offset,
    @Query('limit') limit,
  ) {
    // return req.group;
  }

  @Get('/:id')
  @ApiOperation({ summary: "Get an group" })
  findOne(@Request() req) {
    return req.group;
  }

  @Post()
  @ApiOperation({ summary: "Create an group" })
  async create(@Request() req) {
    return this.authService.login(req.group);
  }

  @Put('/:id')
  @ApiOperation({ summary: "Update an group" })
  async update(@Request() req) {
    return req.group;
  }

  @Delete('/:id')
  @ApiOperation({ summary: "Delete an group" })
  async delete(@Request() req) {
    return req.group;
  }
}
