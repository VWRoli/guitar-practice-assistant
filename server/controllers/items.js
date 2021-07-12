import mongoose from 'mongoose';
import PracticeItem from '../models/practiceItem.js';
import createHttpError from 'http-errors';

export const getItems = async (req, res, next) => {
  try {
    const practiceItems = await PracticeItem.find({
      userId: req.userId,
    });
    res.status(200).json(practiceItems);
  } catch (error) {
    next(error);
  }
};

export const createItem = async (req, res, next) => {
  const newItem = new PracticeItem({
    ...req.body,
  });

  if (!newItem) throw createHttpError(400, `Problem creating item`);

  try {
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw createHttpError(404, 'No item with that ID.');

    await PracticeItem.findByIdAndRemove(id);

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const updateItem = async (req, res, next) => {
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
    next(error);
  }
};
