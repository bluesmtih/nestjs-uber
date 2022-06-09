import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WeChatModule } from 'nest-wechat';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WechatController } from './wechat/wechat.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.test.local',
    }),
    WeChatModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        appId: configService.get('wxda6d6eabe4c0a2b6'),
        secret: configService.get('6265f81e61784b31e7f20a53ad9d4de8'),
        token: configService.get('nestjs'),
      }),
    }),
  ],
  controllers: [AppController, WechatController],
  providers: [AppService],
})
export class AppModule {}
