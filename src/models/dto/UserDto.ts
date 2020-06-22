import { ApiProperty } from '@nestjs/swagger'

export class UserDto {
  @ApiProperty()
  role: string

  @ApiProperty()
  email: string

  @ApiProperty()
  password: string
}
