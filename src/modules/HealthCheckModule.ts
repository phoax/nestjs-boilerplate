import { Module } from '@nestjs/common';

import { HealthCheckController } from 'src/controllers/HealthCheckController';
import { HealthCheckService } from 'src/services/HealthCheckService';

@Module({
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
  exports: [HealthCheckService],
})
export class HealthChecksModule { }
