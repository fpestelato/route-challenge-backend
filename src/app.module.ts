import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { config } from 'config'
import { DatabaseConfig } from 'database.config';
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
  imports: [ 
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    ConfigModule.forRoot({
      isGlobal:true,
      load: [config],
    }),
    DeliveriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
