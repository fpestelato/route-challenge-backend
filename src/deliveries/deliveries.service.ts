import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { Delivery, DeliveryDocument } from './schemas/delivery.schema';

@Injectable()
export class DeliveriesService {
    constructor(@InjectModel(Delivery.name) private readonly deliveryModel: Model<DeliveryDocument>) {}

    async findAll(): Promise<Delivery[]> {
        return await this.deliveryModel.find().exec();
    }

    async create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
        const createdDelivery = await this.deliveryModel.create(createDeliveryDto);

        if (!createdDelivery) {
            throw new InternalServerErrorException('Problem to create a delivery');
        }

        return createdDelivery;
    }

    async delete(): Promise<void> {
       await this.deliveryModel.deleteMany({});
    }
}
