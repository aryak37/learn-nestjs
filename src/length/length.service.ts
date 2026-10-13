import { Injectable } from '@nestjs/common';
import { LengthDto } from './dto/length.dto.js';

@Injectable()
export class LengthService {
    convertLength(dto: LengthDto){
        return {
            success: true,
            message: "Length Converted",
            data: {
                meter: dto.meter,
                kilometers: dto.meter/1000,
                centimeters: dto.meter*100,
                miles: dto.meter/1609
            }
        }
    }
}
