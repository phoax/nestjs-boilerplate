import { Module } from '@nestjs/common';

import { ProfileController } from 'src/controllers/ProfileController';
import { ProfileService } from 'src/services/ProfileService';
import { AuthModule } from 'src/modules/AuthModule';

@Module({
  imports: [AuthModule],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule { }
