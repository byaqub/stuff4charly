const mongoose = require('mongoose');
const { Schema } = mongoose;

const testObjectSchema = new Schema({
  key1: String,
  key2:     {
    key2key1: String,
    key2key2: String
  },
  key3: Number
})

mongoose.model('testObjects', testObjectSchema);