import express from 'express';
import { getProductsCategory, getProducts, searchProducts } from '../controllers/product.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/category', getProductsCategory);
router.get('/search', searchProducts);

export default router;
