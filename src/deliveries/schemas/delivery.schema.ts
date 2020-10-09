import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Delivery extends Document{
    @Prop()
    name: string;
    @Prop()
    weight: number;
    @Prop()
    publicArea: string;
    @Prop()
    number: number;
    @Prop()
    district: string;
    @Prop()
    complement: string;
    @Prop()
    city: string;
    @Prop()
    state: string;
    @Prop()
    country: string;
    @Prop()
    latitude: number;
    @Prop()
    longitude: number;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);