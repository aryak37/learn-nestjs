import { Controller } from '@nestjs/common';
import { ConvertService } from './convert.service.js';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}
}
