import express from 'express';
import auth from '../middleware/auth.js';
import {
  signin,
  signup,
  getProfile,
  updateProfile,
} from '../controllers/users.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/me', auth, getProfile);
router.patch('/me', auth, updateProfile);

export default router;
