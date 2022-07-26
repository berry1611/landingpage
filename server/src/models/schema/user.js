import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }],
  },
  { timestamps: true }
);

export default userSchema;
