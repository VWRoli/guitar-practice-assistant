import mongoose from 'mongoose';
import PracticeItem from '../models/practiceItem.js';

export const getItems = async (req, res) => {
  try {
    const practiceItems = await PracticeItem.find();

    res.status(200).send(practiceItems);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const createItem = async (req, res) => {
  const item = req.body;
  const newItem = new PracticeItem(item);
  try {
    await newItem.save();

    res.status(201).send(newItem);
  } catch (error) {
    res.status(409).send(error);
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post with that ID');
  }

  await PracticeItem.findByIdAndRemove(id);

  res.send({ message: 'Item deleted successfully' });
};
