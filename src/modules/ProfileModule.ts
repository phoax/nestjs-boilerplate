import { Module } from '@nestjs/common';
import { ProfileService } from 'src/services/ProfileService';

@Module({
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule { }
