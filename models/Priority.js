const mongoose = require('mongoose')

const PrioritySchema = new mongoose.Schema({
  Priority: {
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



module.exports = mongoose.model('Priority', PrioritySchema)
