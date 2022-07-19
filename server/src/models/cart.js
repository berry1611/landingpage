import mongoose from 'mongoose';
import cartSchema from './schema/cart.js';

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
