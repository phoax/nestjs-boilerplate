import {
  Controller,
  Body,
  Delete,
  Get,
  Post,
  Put,
  Request,
  Query,
  UseGuards,
} from '@nestjs/common'

import { ApiBearerAuth, ApiQuery, ApiOperation, ApiTags } from '@nestjs/swagger'

import { UsersService } from 'src/services/UsersService'
import { JwtAuthGuard } from 'src/auth/guards/JwtAuthGuard'

import { UserDto } from 'src/models/dtos/UserDto'
import { User } from 'src/models/entities/UserEntity'

import { UserRoles } from 'src/constants/userRoles'

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
// @UseGuards(AdminGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get user list' })
  @ApiQuery({
    name: 'offset',
    description: 'From the desired user to return',
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: 'limit',
    description: 'The maximum number of users to return',
    required: false,
    type: Number,
  })
  findAll(@Query('offset') offset, @Query('limit') limit) {
    // return req.user
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get an user' })
  findOne(@Request() req) {
    return req.user
  }

  @Post()
  @ApiOperation({ summary: 'Create an user' })
  async create(@Body() userDto: UserDto) {
    const user = new User()
    user.email = userDto.email
    user.password = userDto.password
    // user.role = UserRoles[userDto.role]
    return this.usersService.create(user)
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update an user' })
  async update(@Request() req) {
    return req.user
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete an user' })
  async delete(@Request() req) {
    return req.user
  }
}
