import { Body, Controller, Delete, Get, HttpCode, Post } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Delivery } from './schemas/delivery.schema';

@Controller('deliveries')
export class DeliveriesController {
    constructor(@InjectModel(Delivery.name) private readonly deliveryModel: Model<Delivery>) {}

    @Get()
    async findAll(): Promise<Delivery[]> {
        return this.deliveryModel.find().exec();
    }

    @Post()
    @HttpCode(201)
    create(@Body() createCatDto: CreateDeliveryDto): string {
        return 'this action create a new delivery';
    }

    @Delete()
    delete(): void {
        // delete all clients
    }
}
