import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  isDisabled: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const PracticeItem = mongoose.model('PracticeItem', itemSchema);

export default PracticeItem;
