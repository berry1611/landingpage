import mongoose from 'mongoose';

const cartSchema = mongoose.Schema(
  {
    name: String,
    code: String,
    color: String,
    price: Number,
    stock: Number,
    imageUrl: String,
    quantity: Number,
  },
  { timestamps: true }
);

export default cartSchema;
