import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: String,
    code: String,
    color: String,
    price: Number,
    stock: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
