import { Injectable } from '@nestjs/common';
import { ScoresDto } from './dto/scores.dto.js';
import { count } from 'console';
import { fail } from 'assert';

@Injectable()
export class ScoresService {
    scoreSumary(dto: ScoresDto){
        const average = dto.scores.reduce((sum, score) => sum + score, 0) / dto.scores.length
        const highest = Math.max(...dto.scores)
        const lowest = Math.min(...dto.scores)
        const passed = dto.scores.filter((number) => number >= 70).length
        const failed = dto.scores.filter((number) => number < 70).length

        return {
            success: true,
            message: "Score summary calculated",
            data: {
                count: dto.scores.length,
                average: average,
                highest: highest,
                lowest: lowest,
                passMark: dto?.passMark || 70,
                passed: passed,
                failed: failed
            }
        }
    }
}