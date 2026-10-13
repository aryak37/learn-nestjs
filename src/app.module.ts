import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LengthModule } from './length/length.module.js';
import { TaxModule } from './tax/tax.module.js';
import { ScoresModule } from './scores/scores.module.js';
import { BillsModule } from './bills/bills.module.js';
import { ConvertModule } from './convert/convert.module.js';

@Module({
  imports: [LengthModule, TaxModule, ScoresModule, BillsModule, ConvertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
