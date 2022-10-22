const mongoose = require('mongoose')

const GratefulSchema = new mongoose.Schema({
  Grateful: {
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

module.exports = mongoose.model('Grateful', GratefulSchema)
