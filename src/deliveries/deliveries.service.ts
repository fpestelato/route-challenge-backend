import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { Delivery } from './schemas/delivery.schema';

@Injectable()
export class DeliveriesService {
    constructor(@InjectModel(Delivery.name) private readonly deliveryModel: Model<Delivery>) {}

    async findAll(): Promise<Delivery[]> {
        return await this.deliveryModel.find().exec();
    }

    async create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
        const delivery = new this.deliveryModel(createDeliveryDto);
        const createdDelivery = await delivery.save();

        if (!createdDelivery) {
            throw new InternalServerErrorException("Problem to create a user");
        }

        return createdDelivery;
    }

    async delete(): Promise<void> {
       await this.deliveryModel.deleteMany({});    
    }
}
