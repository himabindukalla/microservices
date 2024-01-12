// src/api-gateway.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Order } from './order/order.schema';
import { Product } from './product/product.schema';

@Controller()
export class ApiGatewayController {
  private readonly productMicroservice: ClientProxy;
  private readonly orderMicroservice: ClientProxy;

  constructor() {
    this.productMicroservice = ClientProxyFactory.create({
      transport: Transport.TCP,
    });

    this.orderMicroservice = ClientProxyFactory.create({
      transport: Transport.TCP,
    });
  }

  @Get('products')
  async getProducts() {
    return this.productMicroservice.send({ cmd: 'findAllProducts' }, {});
  }

  @Get('products/:id')
  async getProduct(@Param('id') id: string) {
    const productId = id;
    return this.productMicroservice.send({ cmd: 'findOneProduct' }, {productId});
  }

  @Post('products')
  async createProduct(@Body() productData: Product) {
    return this.productMicroservice.send({ cmd: 'createProduct' }, {productData});
  }

  @Put('products/:id')
  async updateProduct(@Param('id') id: string, @Body() productData: Product) {
    // console.log("here in get id",id,productData);
    return this.productMicroservice.send({ cmd: 'updateProduct' }, { id, productData });
  }

  @Delete('products/:id')
  async deleteProduct(@Param('id') id: string) {
    return this.productMicroservice.send({ cmd: 'removeProduct' }, {id});
  }

  @Get('orders')
  async getOrders() {
    return this.orderMicroservice.send({ cmd: 'findAllOrders' }, {});
  }

  @Get('orders/:id')
  async getOrder(@Param('id') id: string) {
    return this.orderMicroservice.send({ cmd: 'findOneOrder' }, {id});
  }

  @Post('orders')
  async createOrder(@Body() orderData: Order) {
    // console.log("api gateway", orderData)
    const createdOrder = await this.orderMicroservice.send({ cmd: 'createOrder' }, {orderData});

    // Decrease the count of the corresponding product
    this.productMicroservice.send({ cmd: 'decreaseProductCount' }, orderData.products);

    return createdOrder;
  }

  @Put('orders/:id')
  async updateOrder(@Param('id') id: string, @Body() orderData: Order) {
    return this.orderMicroservice.send({ cmd: 'updateOrder' }, { id, orderData });
  }

  @Delete('orders/:id')
  async deleteOrder(@Param('id') id: string) {
    return this.orderMicroservice.send({ cmd: 'removeOrder' }, {id});
  }
}
