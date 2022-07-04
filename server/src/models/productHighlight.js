import mongoose from 'mongoose';

const ProductHighlightSchema = mongoose.Schema(
  {
    code: String,
    color: String,
  },
  { timestamps: true }
);

const ProductHighlight = mongoose.model('Product Highlight', ProductHighlightSchema);

export default ProductHighlight;
