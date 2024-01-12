// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { ApiGatewayController } from './api-gateway-controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/product'),
    ProductModule,
    OrderModule,
  ],
  controllers: [AppController, ApiGatewayController],
  providers: [AppService],
})
export class AppModule {}

