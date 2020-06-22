import { Module } from '@nestjs/common';

import { SeederService } from 'src/services/SeederService';
// import { UsersModule } from 'src/modules/UsersModule';
import { UsersService } from 'src/services/UsersService';

@Module({
  // imports: [UsersModule],
  providers: [SeederService, UsersService],
  exports: [SeederService],
})
export class SeederModule { }
