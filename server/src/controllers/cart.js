import mongoose from 'mongoose';
import Cart from '../models/cart.js';
import User from '../models/user.js';

export const getProductCart = async (req, res) => {
  try {
    const result = await Cart.find({ customerId: req.userId });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(404).json({ message: 'Empty Cart' });
    console.log(error);
  }
};

export const addProductToCart = async (req, res) => {
  try {
    const product = req.body;

    const addedProduct = new Cart({ ...product, productId: product._id, customerId: req.userId, _id: new mongoose.Types.ObjectId() });
    const isProductAdded = await Cart.findOne({ productId: addedProduct.productId, customerId: req.userId });

    if (!isProductAdded) {
      await addedProduct.save();
      await User.findByIdAndUpdate(req.userId, { $push: { cart: addedProduct._id } });
      res.status(201).json({ data: addedProduct });
    } else {
      const incresedQuantity = await Cart.findByIdAndUpdate(isProductAdded._id, { $inc: { quantity: 1 } }, { new: true });
      const updatedProduct = await Cart.findByIdAndUpdate(isProductAdded._id, { subTotal: incresedQuantity.price * incresedQuantity.quantity }, { new: true });
      res.status(200).json({ data: updatedProduct });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    // console.log(error);
  }
};

export const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany({ customerId: req.userId });
    await User.findByIdAndUpdate(req.userId, { cart: [] });
    res.status(200).json({ data: 'Cart items deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateQuantity = async (req, res) => {
  try {
    const { sub, add } = req.body;
    const { id: _id } = req.params;

    if (sub) {
      const updatedQuantity = await Cart.findOneAndUpdate({ _id, customerId: req.userId }, { $inc: { quantity: -1 } }, { new: true });
      if (updatedQuantity.quantity < 1) {
        updatedQuantity = await Cart.findOneAndDelete({ _id, customerId: req.userId }, { new: true });
        return res.status(200).json({ message: 'Item deleted' });
      }
      const result = await Cart.findOneAndUpdate({ _id, customerId: req.userId }, { subTotal: updatedQuantity.quantity * updatedQuantity.price }, { new: true });
      return res.status(200).json({ data: result });
    }

    if (add) {
      const updatedQuantity = await Cart.findOneAndUpdate({ _id, customerId: req.userId }, { $inc: { quantity: 1 } }, { new: true });
      const result = await Cart.findOneAndUpdate({ _id, customerId: req.userId }, { subTotal: updatedQuantity.quantity * updatedQuantity.price }, { new: true });
      return res.status(200).json({ data: result });
    }

    return res.status(400).json({ message: 'Quantity update failed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const result = await Cart.findOneAndDelete({ _id, customerId: req.userId });
    if (!result) return res.status(400).json({ message: 'Item not found to be deleted' });

    await User.findByIdAndUpdate(req.userId, { $pull: { cart: _id } });
    res.status(200).json({ data: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
