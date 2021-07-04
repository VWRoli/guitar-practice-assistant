import express from 'express';
import auth from '../middleware/auth.js';
import {
  signin,
  signup,
  getProfile,
  updateProfile,
  deleteUser,
} from '../controllers/users.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/me', auth, getProfile);
router.patch('/me', auth, updateProfile);
router.delete('/me', auth, deleteUser);

export default router;
