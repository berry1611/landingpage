import User from '../models/user.js';
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loginSchema, registerSchema } from '../inputValidation/user.js';
import { ERROR_PARAMS_AUTH } from '../constant/errorParams.js';

export const register = async (req, res) => {
  try {
    const registerData = await registerSchema.validateAsync(req.body);
    const userExists = await User.findOne({ email: registerData.email });

    if (userExists) return res.status(400).json({ message: 'User already registered', params: ERROR_PARAMS_AUTH });

    const hashedPassword = await hash(registerData.password, 12);
    const createdUser = await User.create({ ...registerData, password: hashedPassword });
    const { password, ...result } = createdUser.toObject();
    const token = jwt.sign({ id: createdUser._id, email: createdUser.email }, process.env.JWT_SECRET, { expiresIn: '12h' });
    res.status(200).json({ data: result, token });
  } catch (error) {
    if (error.isJoi) return res.status(422).json({ message: error.message, params: error.details[0].path[0] });
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const login = async (req, res) => {
  try {
    const loginData = await loginSchema.validateAsync(req.body);
    const userData = await User.findOne({ email: loginData.email });

    if (!userData) return res.status(400).json({ message: 'Email or password wrong', params: ERROR_PARAMS_AUTH });

    const isPasswordCorrect = await compare(loginData.password, userData.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Email or password wrong', params: ERROR_PARAMS_AUTH });

    const token = jwt.sign({ id: userData._id, email: userData.email }, process.env.JWT_SECRET, { expiresIn: '12h' });
    const { password, ...result } = userData.toObject();
    res.status(200).json({ data: result, token });
  } catch (error) {
    console.log(error);
    if (error.isJoi) return res.status(422).json({ message: error.message, params: error.details[0].path[0] });
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
