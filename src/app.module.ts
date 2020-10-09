import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb+srv://flavio:flavio@cluster0.b0yuw.mongodb.net/route-challenge'),
    DeliveriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
