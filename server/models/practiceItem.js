import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  title: String,
  duration: Number,
  type: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PracticeItem = mongoose.model('PracticeItem', itemSchema);

export default PracticeItem;
