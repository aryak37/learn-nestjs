import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LengthService } from './length.service.js';
import { LengthDto } from './dto/length.dto.js';

@Controller('length')
export class LengthController {
  constructor(private readonly lengthService: LengthService) {}
  @Get('/length/:meter')
  getLength(@Param() dto: LengthDto){
    return this.lengthService.convertLength(dto)
  }
}
