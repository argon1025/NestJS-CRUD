import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    required: true,
    example: 'id',
    description: '아이디',
  })
  id: string;
}
