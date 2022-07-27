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
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

productSchema.virtual('customers', {
  ref: 'Cart',
  localField: '_id',
  foreignField: 'productId',
});

const Product = mongoose.model('Product', productSchema);

export default Product;
