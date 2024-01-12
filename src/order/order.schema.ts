// src/order/order.schema.ts
import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  isConfirmed: Boolean,
  transactionMode: { type: String, enum: ["UPI","COD"]},
  amountPaid: Number, 
});

export interface Order {
  products: string[] | mongoose.Types.ObjectId[];
  isConfirmed: boolean,
  transactionMode: string,
  amountPaid: number,
}
