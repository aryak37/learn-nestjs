import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, Min, Max, IsInt, IsString, IsNumber, IsOptional, ValidateNested, MinLength, MaxLength } from "class-validator";


class Item {
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    name: string

    @IsNumber()
    @Min(0)
    price: number

    @IsInt()
    @Min(1)
    qty: number
}


export class BillsDtoParams {
    @IsInt()
    @Min(2)
    @Max(20)
    peopleCount: number
}

export class BillsDtoBody {
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(30)
    @ValidateNested({each: true})
    @Type(()=>Item)
    items: Item[]

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(30)
    tipPercent: number
}