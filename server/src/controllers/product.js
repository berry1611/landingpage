import Product from '../models/product.js';

export const getProducts = async (req, res) => {
  try {
    const { name, page } = req.query;
    const LIMIT = 12;
    const startIndex = (parseInt(page) - 1) * LIMIT;
    const totalItem = await Product.countDocuments({ name });

    const result = await Product.find(name ? { name } : {})
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({ data: result, currentPage: parseInt(page), numberOfPages: Math.ceil(totalItem / LIMIT) });
  } catch (error) {
    res.status(404).json({ message: 'Data not found' });
  }
};

export const getProductsCategory = async (req, res) => {
  try {
    const result = await Product.find({}).select('name -_id');

    res.status(200).json({ data: result });
  } catch (error) {
    res.status(404).json({ message: 'Data not found' });
  }
};

export const searchProducts = async (req, res) => {
  try {
    const { keyword, page } = req.query;
    const LIMIT = 12;
    const startIndex = (parseInt(page) - 1) * LIMIT;
    const totalItems = await Product.countDocuments({ $or: [{ name: new RegExp(keyword, 'i') }, { code: new RegExp(keyword, 'i') }, { color: new RegExp(keyword, 'i') }] });

    const result = await Product.find({ $or: [{ name: new RegExp(keyword, 'i') }, { code: new RegExp(keyword, 'i') }, { color: new RegExp(keyword, 'i') }] })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({ data: result, currentPage: parseInt(page), numberOfPages: Math.ceil(totalItems / LIMIT) });
  } catch (error) {
    res.status(500).json({ message: `Internal server error` });
    console.log(error);
  }
};
