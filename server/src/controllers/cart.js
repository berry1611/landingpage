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
  const addedProduct = new Cart({ ...product });
  try {
    await addedProduct.save();
    res.status(201).json({ data: addedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
