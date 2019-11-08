const mongoose = require('mongoose')
const Schema = mongoose.Schema

const images = new Schema({
  image : {
    type : String
  },
  userId : {
    type : Schema.Types.ObjectId,
    ref : "User"
  }
},{
  timestamps : true
})

const Image = mongoose.model('Image',images)
module.exports = Image