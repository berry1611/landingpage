import express from 'express';
import { addProductToCart, clearCart, deleteCartItem, getProductCart, updateQuantity } from '../controllers/cart.js';

const router = express.Router();

router.get('/', getProductCart);
router.post('/', addProductToCart);
router.delete('/', clearCart);
router.patch('/:id', updateQuantity);
router.delete('/:id', deleteCartItem);

export default router;
