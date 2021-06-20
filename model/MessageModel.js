const mongoose = require('mongoose');
const messageModel = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('messages', messageModel);
