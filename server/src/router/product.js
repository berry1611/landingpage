import express from 'express';
import { getProductsCategory, getProducts } from '../controllers/product.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/category', getProductsCategory);

export default router;
