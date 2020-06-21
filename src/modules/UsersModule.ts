import { Module } from '@nestjs/common';
import { UsersService } from 'src/services/UsersService';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
