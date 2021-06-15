import bcrypt from 'bcryptjs';

import User from '../models/user.js';

export const signin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ message: 'Invalid credentials.' });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials.' });

    const token = await user.generateAuthToken();

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const signup = async (req, res) => {
  const user = new User(req.body);
  try {
    const existingUser = await User.findOne({ email: user.email });

    if (existingUser)
      return res.status(400).json({ message: 'User already exists.' });

    await user.save();

    const token = await user.generateAuthToken();
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json(error);
  }
};
