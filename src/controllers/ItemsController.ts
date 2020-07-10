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

import { ItemDto } from 'src/models/dtos/ItemDto'

import { ItemsQueryInterface } from 'src/models/interfaces/ItemsQueryInterface'

@ApiTags("items")
@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) { }

  @Get()
  @ApiOperation({ summary: "Get items list" })
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
    const itemsQuery = new ItemsQueryInterface()
    itemsQuery.limit = limit ? limit : itemsQuery.limit
    itemsQuery.offset = offset ? offset : itemsQuery.offset

    return this.itemsService.findAll(itemsQuery)
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
