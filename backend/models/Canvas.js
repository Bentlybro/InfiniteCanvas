
const mongoose = require('mongoose');

const CanvasSchema = new mongoose.Schema({
  userId: String,
  elements: [{
    type: String,
    points: Array,
    color: String,
    width: Number,
    timestamp: Date
  }]
});

module.exports = mongoose.model('Canvas', CanvasSchema);