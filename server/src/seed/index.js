import mongoose from 'mongoose';
import Product from '../models/product.js';
import productSeed from './data/index.js';
import dotenv from 'dotenv';

dotenv.config();

async function seeding() {
  await Product.deleteMany({});
  for (const seed in productSeed) {
    const result = await Product.insertMany(productSeed[seed]);
  }
  console.log('Seeding Success');
  mongoose.disconnect();
}

mongoose
  .connect(process.env.DATABASE_ACCESS)
  .then(seeding())
  .catch((error) => console.log(error));
