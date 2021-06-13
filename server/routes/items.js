import express from 'express';
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from '../controllers/items.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getItems);
router.post('/', auth, createItem);
router.patch('/:id', auth, updateItem);
router.delete('/:id', auth, deleteItem);

export default router;
