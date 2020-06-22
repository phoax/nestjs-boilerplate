import { ApiProperty } from '@nestjs/swagger'

export class GroupDto {
  @ApiProperty()
  email: string

}
