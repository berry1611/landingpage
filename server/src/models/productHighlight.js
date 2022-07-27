import mongoose from 'mongoose';

const productHighlightSchema = mongoose.Schema(
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

const ProductHighlight = mongoose.model('Product Highlight', productHighlightSchema);

export default ProductHighlight;
