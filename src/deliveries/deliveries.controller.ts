import { Body, Controller, Delete, Get, HttpCode, Post } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@Controller('deliveries')
export class DeliveriesController {
    @Get()
    findAll(): string {
        return 'this action returns all deliveries';
    }

    @Post()
    @HttpCode(201)
    create(@Body()  createCatDto: CreateDeliveryDto): string {
        return 'this action create a new delivery';
    }

    @Delete()
    delete(): void {
        // delete all clients
    }
}
