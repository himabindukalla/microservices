// src/product/product.controller.ts
import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';
import { Product } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() productData: Product) {
    return this.productService.create(productData);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() productData: Product) {
    return this.productService.update(id, productData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  @MessagePattern({ cmd: 'findAllProducts' })
  async findAllProducts() {
    return this.productService.findAll();
  }
}
