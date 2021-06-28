// nestjs 에서는 interface 보다 class를 자주 사용한다
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';

// interface는 타입스크립트로 빌드된 후에 사라지기 때문 -> 자바 스크립트 에서도 타입 검증이 가능
export class JoinRequestDto extends UserDto {}
