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
