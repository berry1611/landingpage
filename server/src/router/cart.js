import express from 'express';
import { addProductToCart, clearCart, deleteCartItem, getProductCart, updateQuantity } from '../controllers/cart.js';
import authentication from '../middleware/authentication.js';

const router = express.Router();

router.get('/', authentication, getProductCart);
router.post('/', authentication, addProductToCart);
router.delete('/', authentication, clearCart);
router.patch('/:id', authentication, updateQuantity);
router.delete('/:id', authentication, deleteCartItem);

export default router;
