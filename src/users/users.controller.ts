import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('api/users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @ApiOperation({ summary: '현재 로그인된 회원정보를 조회합니다' })
  @Get()
  getUsers(@Req() req) {
    // 로그인된 회원정보
    return req.user;
  }

  @ApiOperation({ summary: '회원가입을 요청합니다' })
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    // 회원가입 DTO 데이터 전달 오프젝트
    this.UsersService.postUsers(data.email, data.nickName, data.password);
  }

  @ApiOperation({ summary: '로그인을 요청합니다' })
  @Post('login')
  logIn(@Req() req) {
    return req.user;
  }

  //의존성 주입 차원에서 Req, Res 모듈을 사용하지 않는 편이 좋으나
  // 넣어야 하는 구간이 어쩔수 없이 발생하는 경우가 있음
  // 익스프레스에 의존하는 부분이 되어 버린 부분
  @ApiOperation({ summary: '로그아웃을 요청합니다' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('Ok');
  }
}
