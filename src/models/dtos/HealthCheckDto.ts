import { ApiProperty } from '@nestjs/swagger'

export class HealthCheckDto {

  @ApiProperty()
  databaseStatus: boolean

}
