import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: 'argon1025@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: '이성록',
    description: '사용자 이름',
    required: true,
  })
  public nickName: string;

  @ApiProperty({
    example: '@sungrok123',
    description: '사용자 비밀번호',
    required: true,
  })
  public password: string;
}
