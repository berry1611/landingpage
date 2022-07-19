import mongoose from 'mongoose';
import productSchema from './schema/product.js';

const ProductHighlight = mongoose.model('Product Highlight', productSchema);

export default ProductHighlight;
