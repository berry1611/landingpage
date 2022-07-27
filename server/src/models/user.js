import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.virtual('products', {
  ref: 'Cart',
  localField: '_id',
  foreignField: 'customerId',
});

const User = mongoose.model('User', userSchema);

export default User;
