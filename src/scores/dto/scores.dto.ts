import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsNumber, Min, Max, IsOptional } from "class-validator";

export class ScoresDto {
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @IsNumber({}, { each: true })
    @Min(0,{each:true})
    @Max(100,{each:true})

    scores: number[]

    @IsOptional()
    @Min(0)
    @Max(100)
    @IsNumber()

    passMark?: number
}