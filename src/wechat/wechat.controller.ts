import { Controller, Get } from '@nestjs/common';

@Controller('wechat')
export class WechatController {
  @Get('auth')
  getAuth(): string {
    return 'auth ok'
  }
}
