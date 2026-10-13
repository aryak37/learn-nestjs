import { Body, Controller, Post } from '@nestjs/common';
import { ScoresService } from './scores.service.js';
import { ScoresModule } from './scores.module.js';
import { ScoresDto } from './dto/scores.dto.js';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}
  @Post('average')
    getScore(@Body() dto: ScoresDto){
      return this.scoresService.scoreSumary(dto)
    }
}