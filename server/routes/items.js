import express from 'express';
import { getItems, createItem, deleteItem } from '../controllers/items.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getItems);
router.post('/', auth, createItem);
router.delete('/:id', auth, deleteItem);

export default router;
