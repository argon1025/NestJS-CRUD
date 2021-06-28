import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Helloworld!' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({ summary: 'API 서비스 버전과 테스트를 진행합니다' })
  @ApiQuery({
    name: 'testCode',
    required: true,
    description: '테스트 코드 쿼리데이터',
  })
  @ApiParam({
    name: 'testCode',
    required: true,
    description: '테스트 코드 파라메터',
  })
  @ApiResponse({
    status: 200,
    description: '정상 응답',
  })
  @Get('ver/:testCode')
  getVersion(@Query() querysData, @Param() paramsData): string {
    // getChat(@Query('page') page) { 선택적으로 로드 할 경우
    // getChat(@Param('url') url) { 선택적으로 로드 할 경우
    // http://localhost:3000/ver/123?test=321
    console.log(querysData);
    console.log(paramsData);
    return process.env.VERSION;
  }
}
