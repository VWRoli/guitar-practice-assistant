import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import createHttpError from 'http-errors';

import User from '../models/user.js';

export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) throw createHttpError(400, 'Invalid credentials.');

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) throw createHttpError(400, 'Invalid credentials.');

    const token = await user.generateAuthToken();

    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};

export const signup = async (req, res, next) => {
  const user = new User(req.body);
  try {
    const existingUser = await User.findOne({ email: user.email });

    if (existingUser) throw createHttpError(400, 'User already exists.');

    await user.save();

    const token = await user.generateAuthToken();
    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  const _id = req.userId;
  try {
    const [user] = await User.find({ _id });

    if (!user) throw createHttpError(404, `Couldn't find user`);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  const _id = req.userId;

  try {
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
      throw createHttpError(404, 'No user with that ID.');

    await User.findByIdAndUpdate({ _id }, user, {
      new: true,
    });

    res.status(200).json({ message: 'User profile updated successfully!' });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const _id = req.userId;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      throw createHttpError(404, 'No user with that ID.');

    await User.findByIdAndRemove(_id);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
