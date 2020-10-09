import { Module } from '@nestjs/common';
import { DeliveriesController } from './deliveries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Delivery, DeliverySchema } from './schemas/delivery.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Delivery.name, schema: DeliverySchema }])],
    controllers: [DeliveriesController],
    providers: [],
})
export class DeliveriesModule {}
