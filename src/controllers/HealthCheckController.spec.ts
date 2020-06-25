import { Test } from '@nestjs/testing'
import { HealthCheckController } from './HealthCheckController'
import { HealthCheckService } from '../services/HealthCheckService'
import { HealthCheckDto } from '../models/dto/HealthCheckDto'

describe('HealthCheckController', () => {
  let healthCheckController: HealthCheckController
  let healthCheckService: HealthCheckService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckService],
    }).compile()

    healthCheckService = moduleRef.get<HealthCheckService>(HealthCheckService)
    healthCheckController = moduleRef.get<HealthCheckController>(HealthCheckController)
  })

  describe('healthCheck', () => {
    it('should return healthCheck data', async () => {
      const result: HealthCheckDto = {
        databaseStatus: true
      }
      jest.spyOn(healthCheckService, 'healthCheck').mockImplementation(async () => result)
      expect(await healthCheckController.healthCheck()).toBe(result)
    })
  })
})
