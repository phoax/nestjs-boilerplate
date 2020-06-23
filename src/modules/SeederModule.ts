import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SeederService } from 'src/services/SeederService';
import { UsersModule } from 'src/modules/UsersModule';
// import { UsersService } from 'src/services/UsersService';

@Module({
  imports: [UsersModule, ConfigModule],
  providers: [
    SeederService,
    // UsersService
  ],
  exports: [SeederService],
})
export class SeederModule { }
