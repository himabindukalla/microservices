// src/product/product.controller.ts
import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';
import { Product } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  @MessagePattern({ cmd: 'createProduct' })
  create(@Body() productData: Product) {
    return this.productService.create(productData);
  }

  @MessagePattern({ cmd: 'findAllProducts' })
  findAll() {
    return this.productService.findAll();
  }

  @MessagePattern({ cmd: 'findOneProduct' })
  findOne({ productId }: { productId: string }) {
    // console.log("in controllers", productId)
    return this.productService.findOne(productId);
  }

  @MessagePattern({ cmd: 'updateProduct' })
  update({ id, productData }: { id: string, productData: Product }) {
    // console.log("in controller", id,productData)
    return this.productService.update(id, productData);
  }

  @MessagePattern({ cmd: 'removeProduct' })
  remove({ id }: { id: string }) {
    return this.productService.remove(id);
  }
}
