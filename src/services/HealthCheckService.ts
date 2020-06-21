import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {

  async healthcheck(): Promise<any> {
    return { health: 'checked!' }
  }
}
