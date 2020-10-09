import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateDeliveryDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    weight: number;
    
    @IsNotEmpty()
    publicArea: string;

    @IsNotEmpty()
    @IsNumber()
    number: number;

    @IsNotEmpty()
    district: string;

    @IsOptional()
    complement: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    state: string;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    @IsNumber()
    latitude: number;

    @IsNotEmpty()
    @IsNumber()
    longitude: number;
}