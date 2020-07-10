import { Module } from '@nestjs/common';

import { ProfileController } from '../controllers/ProfileController';
import { ProfileService } from '../services/ProfileService';
import { AuthModule } from '../modules/AuthModule';

@Module({
  imports: [AuthModule],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule { }
