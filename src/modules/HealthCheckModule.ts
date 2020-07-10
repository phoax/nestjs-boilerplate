import { Module } from '@nestjs/common';

import { HealthCheckController } from '../controllers/HealthCheckController';
import { HealthCheckService } from '../services/HealthCheckService';

@Module({
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
  exports: [HealthCheckService],
})
export class HealthChecksModule { }
