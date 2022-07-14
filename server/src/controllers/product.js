import Product from '../models/product.js';

export const getProducts = async (req, res) => {
  const limit = parseInt(req.query.limit);
  const name = req.query.name;

  try {
    const result = await Product.find(name ? { name } : {}).limit(limit);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(404).json({ message: 'Data not found' });
  }
};
