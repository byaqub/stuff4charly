const mongoose = require('mongoose');
const { Schema } = mongoose;

const storySchema = new Schema({
  title: String
});

mongoose.model('stories', storySchema);