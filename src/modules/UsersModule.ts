import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from 'src/controllers/UsersController'
import { UsersService } from 'src/services/UsersService';
import { AuthModule } from 'src/modules/AuthModule';


import { User } from 'src/models/UserEntity';

@Module({
  imports: [
    // AuthModule,
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
