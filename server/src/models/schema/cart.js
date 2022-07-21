import mongoose from 'mongoose';

const cartSchema = mongoose.Schema(
  {
    name: String,
    code: String,
    color: String,
    price: Number,
    stock: Number,
    imageUrl: String,
    quantity: { type: Number, default: 1 },
    subTotal: {
      type: Number,
      default: function () {
        return this.price * this.quantity;
      },
    },
  },
  { timestamps: true }
);

export default cartSchema;
