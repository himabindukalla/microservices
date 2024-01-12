// src/order/order.controller.ts
import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { MessagePattern } from '@nestjs/microservices';
import { Order } from './order.schema';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'createOrder' })
  create({ orderData }: { orderData: Order }) {
    // console.log("in controller", orderData)
    return this.orderService.create(orderData);
  }

  @MessagePattern({ cmd: 'findAllOrders' })
  findAll() {
    return this.orderService.findAll();
  }

  @MessagePattern({ cmd: 'findOneOrder' })
  findOne({ id }: { id: string }) {
    return this.orderService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateOrder' })
  update({ id, orderData }: { id: string, orderData: Order }) {
    return this.orderService.update(id, orderData);
  }

  @MessagePattern({ cmd: 'removeOrder' })
  remove({ id }: { id: string }) {
    return this.orderService.remove(id);
  }
}
