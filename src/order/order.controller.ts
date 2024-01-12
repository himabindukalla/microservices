// src/order/order.controller.ts
import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { MessagePattern } from '@nestjs/microservices';
import { Order } from './order.schema';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() orderData: Order) {
    return this.orderService.create(orderData);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() orderData: Order) {
    return this.orderService.update(id, orderData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }

  @MessagePattern({ cmd: 'findAllOrders' })
  async findAllOrders() {
    return this.orderService.findAll();
  }
}
