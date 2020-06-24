import {
  Controller,
  Body,
  Delete,
  Get,
  Post,
  Put,
  Request,
  Query,
  UseGuards
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiQuery,
  ApiOperation,
  ApiTags
} from "@nestjs/swagger";

import { ItemsService } from 'src/services/ItemsService';
import { JwtAuthGuard } from 'src/auth/guards/JwtAuthGuard'

import { ItemDto } from 'src/models/dto/ItemDto'

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) { }

  @Get()
  @ApiTags("items")
  @ApiOperation({ description: "Get items list" })
  @ApiQuery({
    name: "offset",
    description: "From the desired verb to return",
    required: false,
    type: Number
  })
  @ApiQuery({
    name: "limit",
    description: "The maximum number of items to return",
    required: false,
    type: Number
  })
  async findAll(
    @Query('offset') offset,
    @Query('limit') limit,
    // @Req() request
  ) {
    // return this.itemsService.create();
  }

  @Get('/:id')
  @ApiOperation({ summary: "Get an item" })
  findOne(@Request() req) {
    return req.item;
  }

  @Post()
  @ApiOperation({ summary: "Create an item" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(@Body() item: ItemDto) {
    return this.itemsService.create(item)
  }

  @Put('/:id')
  @ApiOperation({ summary: "Update an item" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(@Request() req) {
    return req.item
  }

  @Delete('/:id')
  @ApiOperation({ summary: "Delete an item" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async delete(@Request() req) {
    return req.item
  }

}
