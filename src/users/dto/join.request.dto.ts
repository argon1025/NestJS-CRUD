// nestjs 에서는 interface 보다 class를 자주 사용한다
import { ApiProperty } from '@nestjs/swagger';

// interface는 타입스크립트로 빌드된 후에 사라지기 때문 -> 자바 스크립트 에서도 타입 검증이 가능
export class JoinRequestDto {
  @ApiProperty({
    example: 'argon1025@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: '이성록',
    description: '이름',
    required: true,
  })
  public nickName: string;

  @ApiProperty({
    example: '@sungrok123',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
