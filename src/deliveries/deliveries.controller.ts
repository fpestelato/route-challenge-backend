import { Body, Controller, Delete, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto'; 
import { Delivery } from './schemas/delivery.schema';

@Controller('deliveries')
export class DeliveriesController {
    constructor(private readonly deliveryService: DeliveriesService) {}

    @Get()    
    async findAll(): Promise<Delivery[]> {
        return this.deliveryService.findAll();
    }

    @Post()
    @HttpCode(201)
    @UsePipes(new ValidationPipe())
    async create(@Body() createCatDto: CreateDeliveryDto): Promise<Delivery> {
        return this.deliveryService.create(createCatDto);
    }

    @Delete()
    async delete(): Promise<void> {        
        this.deliveryService.delete();
    }
}
