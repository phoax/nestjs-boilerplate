import { Module } from '@nestjs/common';

import { GroupsController } from 'src/controllers/GroupsController'
import { GroupsService } from 'src/services/GroupsService';
import { AuthModule } from 'src/modules/AuthModule';

@Module({
  imports: [AuthModule],
  controllers: [GroupsController],
  providers: [GroupsService],
  exports: [GroupsService],
})
export class GroupsModule { }
