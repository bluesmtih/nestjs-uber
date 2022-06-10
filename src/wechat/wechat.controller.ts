import { Body, Controller, Get, Logger, Param, Query } from '@nestjs/common';

import { WeChatService } from 'nest-wechat';

@Controller('wechat')
export class WechatController {
  @Get('auth')
  getAuth(@Query() query,@Body() body): boolean {
    Logger.debug('query', query);
    //这里进行
    return true;
  }
}
