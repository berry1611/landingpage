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
