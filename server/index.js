import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import productRoutes from './src/router/product.js';
import userRoutes from './src/router/user.js';
import cartRoutes from './src/router/cart.js';
import { getStoragePath } from './src/utils/pathHelper.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(getStoragePath(), 'public')));

app.get('/', (req, res) => res.status(200).json({ message: 'Connected to Server' }));
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);
app.use('/user', userRoutes);

mongoose
  .connect(process.env.DATABASE_ACCESS)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error));
