import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiSecurity, ApiTags } from "@nestjs/swagger"

import { HealthCheckService } from '../services/HealthCheckService';

@ApiTags("health check")
@Controller('healthcheck')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) { }

  @Get()
  @ApiOperation({ summary: "Get API healthcheck" })
  healthCheck() {
    return this.healthCheckService.healthCheck()
  }
}
