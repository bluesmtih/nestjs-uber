import { Module } from '@nestjs/common';
//引入子Module
import { AgentModule } from '@app/agent/agent.module';
@Module({
  imports: [
    AgentModule
  ],
  providers: [],
})
export class AppModule {}
