import { Module } from '@nestjs/common';
import { HealthCheckService } from 'src/services/HealthCheckService';

@Module({
  providers: [HealthCheckService],
  exports: [HealthCheckService],
})
export class HealthChecksModule { }
