import mongoose from 'mongoose';
import PracticeItem from '../models/practiceItem.js';
import createHttpError from 'http-errors';

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
    res.status(400).json(error);
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw createHttpError(404, 'No item with that ID.');

    await PracticeItem.findByIdAndRemove(id);

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateItem = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const item = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
      throw createHttpError(404, 'No item with that ID.');

    const updatedItem = await PracticeItem.findByIdAndUpdate(_id, item, {
      new: true,
    });

    res.json(updatedItem);
  } catch (error) {
    res.status(400).json(error);
  }
};
