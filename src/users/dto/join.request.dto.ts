// nestjs 에서는 interface 보다 class를 자주 사용한다
// interface는 타입스크립트로 빌드된 후에 사라지기 때문 -> 자바 스크립트 에서도 타입 검증이 가능
export class JoinRequestDto {
  public email: string;
  public nickName: string;
  public password: string;
}
