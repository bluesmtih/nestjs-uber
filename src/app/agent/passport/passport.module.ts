

import { Module } from '@nestjs/common';
import { PassportController } from './passport.controller';
import { PassportService } from './passport.service';

@Module({
  imports: [],
  providers: [PassportService],
  controllers: [PassportController],
})
export class PassportModule {}
