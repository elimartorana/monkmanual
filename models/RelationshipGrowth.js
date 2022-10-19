const mongoose = require('mongoose')

const RelationshipGrowthSchema = new mongoose.Schema({
  RelationshipGrowth: {
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

module.exports = mongoose.model('RelationshipGrowth', RelationshipGrowthSchema)
