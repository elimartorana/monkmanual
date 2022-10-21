const mongoose = require('mongoose')

const LookingForwardSchema = new mongoose.Schema({
  LookingForward: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },

 /* growth: {
    type: Boolean,
    required: true,
  } */
})

module.exports = mongoose.model('LookingForward', LookingForwardSchema)
