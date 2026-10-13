import { Injectable, Param } from '@nestjs/common';
import { BillsDtoBody } from './dto/bills.dto.js';
import { BillsDtoParams } from './dto/bills.dto.js';

@Injectable()
export class BillsService {
    splitBill(params:BillsDtoParams,dto: BillsDtoBody) {
        let subtotal = 0
        for (let Item of dto.items) {
            subtotal +=  Item.qty * Item.price
        }

        const pplCount = params.peopleCount

        const tipAmount = dto.tipPercent * subtotal
        const totall = subtotal + tipAmount
        const perOrang = totall / pplCount

        return {
            success: true,
            message: "Bill Split",
            data: {
                peopleCount: pplCount,
                subtotal: subtotal,
                tipPercent: dto.tipPercent,
                tip: tipAmount,
                total: totall,
                perPerson: perOrang
            }
        }

        
    }
}
