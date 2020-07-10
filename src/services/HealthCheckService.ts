import { Injectable } from '@nestjs/common';

import { HealthCheckDto } from '../models/dtos/HealthCheckDto';

@Injectable()
export class HealthCheckService {

  async healthCheck(): Promise<HealthCheckDto> {
    return {
      databaseStatus: false
    }
  }
}
