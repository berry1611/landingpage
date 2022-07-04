import User from '../models/user.js';
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { confirmPassword, ...rest } = req.body;

  try {
    const userExists = await User.findOne({ email: rest.email });
    if (userExists) return res.status(400).json({ message: 'User already registered', data: null });
    if (rest.password !== confirmPassword) return res.status(400).json({ message: 'Password not match', data: null });

    const hashedPassword = await hash(rest.password, 12);
    const createdUser = await User.create({ ...rest, password: hashedPassword });
    const { password, ...result } = createdUser.toObject();
    const token = jwt.sign({ id: createdUser._id, email: createdUser.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ message: null, data: result, token });
  } catch (error) {
    res.status(500).json({ message: 'Register failed', error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });
    if (!userData) return res.status(400).json({ message: 'Email or password wrong', data: null });
    const isPasswordCorrect = await compare(req.body.password, userData.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Email or password wrong', data: null });
    const token = jwt.sign({ id: userData._id, email: userData.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    const { password, ...result } = userData.toObject();
    res.status(200).json({ message: null, data: result, token });
  } catch (error) {
    res.status(500).json({ message: 'Log in failed', error: error.message });
  }
};
