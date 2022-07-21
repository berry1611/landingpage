import Cart from '../models/cart.js';

export const getProductCart = async (req, res) => {
  try {
    const result = await Cart.find();
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(404).json({ message: 'Empty Cart' });
    console.log(error);
  }
};

export const addProductToCart = async (req, res) => {
  const product = req.body;
  const addedProduct = new Cart(product);
  const isProductAdded = await Cart.findById(addedProduct._id);
  try {
    if (!isProductAdded) {
      await addedProduct.save();
      res.status(201).json({ data: addedProduct });
    } else {
      const updatedQuantity = await Cart.findByIdAndUpdate(addedProduct._id, { $inc: { quantity: 1 } }, { new: true });
      const updatedProduct = await Cart.findByIdAndUpdate(addedProduct._id, { subTotal: updatedQuantity.price * updatedQuantity.quantity }, { new: true });
      res.status(200).json({ data: updatedProduct });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany({});
    res.status(200).json({ data: 'Cart items deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
