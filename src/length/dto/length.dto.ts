import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class LengthDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(1000000)

    meter: number   
}