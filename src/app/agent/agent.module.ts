

import { Module } from '@nestjs/common';
//引入子module
import { PassportModule } from '@app/agent/passport/passport.module';
import { SettingService } from './setting/setting.service';
import { SettingController } from './setting/setting.controller';
import { SettingModule } from './setting/setting.module';

@Module({
  imports: [
      PassportModule,
      SettingModule
  ],
  providers: [SettingService],
  controllers: [SettingController],
})
export class AgentModule {}
