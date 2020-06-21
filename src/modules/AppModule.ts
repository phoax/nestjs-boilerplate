import { Module } from '@nestjs/common';

import { AuthController } from 'src/controllers/AuthController';
import { HealthCheckController } from 'src/controllers/HealthCheckController';
import { ProfileController } from 'src/controllers/ProfileController';
import { UsersController } from 'src/controllers/UsersController';

import { AppService } from 'src/services/AppService';
import { HealthCheckService } from 'src/services/HealthCheckService';

import { AuthModule } from './AuthModule';
import { UsersModule } from './UsersModule';

@Module({
  imports: [
    AuthModule,
    UsersModule,
  ],
  controllers: [
    AuthController,
    HealthCheckController,
    ProfileController,
    UsersController,
  ],
  providers: [
    AppService,
    HealthCheckService,
  ],
})
export class AppModule { }
