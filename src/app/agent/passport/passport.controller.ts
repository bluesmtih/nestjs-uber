import { Controller, Get } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'

@ApiTags('代理商后台身份认证相关接口')
@Controller('/agent/passport')
export class PassportController {
    @Get()
    hello(){
        return 'hello passport'
    }
}
