import mongoose from 'mongoose';
import PracticeItem from '../models/practiceItem.js';

export const getItems = async (req, res) => {
  try {
    const practiceItems = await PracticeItem.find({ userId: req.userId });

    res.status(200).json(practiceItems);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createItem = async (req, res) => {
  const newItem = new PracticeItem({
    ...req.body,
  });

  try {
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json('No post with that ID');
  }

  await PracticeItem.findByIdAndRemove(id);

  res.json({ message: 'Item deleted successfully' });
};
