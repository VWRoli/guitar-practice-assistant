import bcrypt from 'bcryptjs';
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

export const signup = async (req, res) => {
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
