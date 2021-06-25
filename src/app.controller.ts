import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
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
