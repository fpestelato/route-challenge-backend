import { Module } from '@nestjs/common';
import { DeliveriesController } from './deliveries/deliveries.controller';

@Module({
  imports: [],
  controllers: [ DeliveriesController],
  providers: [],
})
export class AppModule {}
