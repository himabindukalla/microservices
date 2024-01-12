// src/product/product.schema.ts
import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  count: Number,
  seller: String,
  category: { type: String, enum: [
    "Clothing",
    "Beauty",
    "Electronics",
    "Toys",
    "Books",
], }
});

export interface Product {
  name: string;
  description: string;
  price: number;
  count: number;
  seller: string;
  category: string;
}
