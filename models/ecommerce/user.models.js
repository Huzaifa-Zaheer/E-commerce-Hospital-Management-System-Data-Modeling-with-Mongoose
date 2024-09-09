import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: 
    {
      type: String,
      required: true,
      unique: true,
      lowerCase: true
    },
    email:
    {
      type: String,
      unique: true,
      required: true,
    },
    password:
    {
      type: String,
      required: true
    }
  }, { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
