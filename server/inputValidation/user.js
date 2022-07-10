import Joi from 'joi';
import { passwordRegex } from '../constant/regex.js';

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const registerSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp(passwordRegex)).required().messages({
    'string.pattern.base': 'Password must have at least 8 characters, 1 uppercase letter, and 1 number',
  }),
  confirmPassword: Joi.valid(Joi.ref('password')).messages({
    'any.only': 'Password not match',
  }),
});
