import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('代理商后台商户相关接口')
@Controller('setting')
export class SettingController {
    @Get()
    hello(){
        return 'hello setting'
    }
}
