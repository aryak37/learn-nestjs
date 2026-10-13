import { Body, Controller, Param, Post } from '@nestjs/common';
import { BillsService } from './bills.service.js';
import { BillsDtoBody, BillsDtoParams } from './dto/bills.dto.js';
import { dot } from 'node:test/reporters';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}
  @Post(':peopleCount/split')
    hitungBills(@Body() Body: BillsDtoBody, @Param() Param: BillsDtoParams){
      return this.billsService.splitBill(Param, Body)
    }
}
