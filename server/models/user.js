import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

//Set up relationship between users and practice items
userSchema.virtual('items', {
  ref: 'PracticeItem',
  localField: '_id',
  foreignField: 'userId',
});

//Remove password and other sensitive information from response
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

export default mongoose.model('User', userSchema);
