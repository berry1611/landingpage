import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    code: String,
    color: String,
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
