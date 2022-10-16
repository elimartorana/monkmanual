const mongoose = require('mongoose')

const PersonalGrowthSchema = new mongoose.Schema({
  PersonalGrowth: {
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

module.exports = mongoose.model('PersonalGrowth', PersonalGrowthSchema)
