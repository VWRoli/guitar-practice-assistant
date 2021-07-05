import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import PracticeItem from './practiceItem.js';

const SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required!'],
    unique: true,
    maxlength: 16,
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw new Error('The password you provided is not strong enough!');
      }
    },
  },
});

//Set up relationship between users and practice items
userSchema.virtual('items', {
  ref: 'PracticeItem',
  localField: '_id',
  foreignField: 'userId',
});

//Hash password before saving
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
  }
  next();
});

//GENERATE TOKEN
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.JWT_SECRET
  );
  await user.save();
  return token;
};

//Remove password and other sensitive information from response
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

//Delete user tasks when user is removed
userSchema.pre('remove', async function (next) {
  const user = this;
  await PracticeItem.deleteMany({ userId: user._id });
  next();
});

export default mongoose.model('User', userSchema);
