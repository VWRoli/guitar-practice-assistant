import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
import User from '../models/user.js';

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      _id: decoded.id,
    });
    if (!user) throw createHttpError(400, 'Invalid user ID');

    req.userId = user._id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: 'Please authenticate' });
  }
};
export default auth;
