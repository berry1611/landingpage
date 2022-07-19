import express from 'express';
import { addProductToCart, clearCart, getProductCart } from '../controllers/cart.js';

const router = express.Router();

router.get('/', getProductCart);
router.post('/', addProductToCart);
router.delete('/', clearCart);

export default router;
