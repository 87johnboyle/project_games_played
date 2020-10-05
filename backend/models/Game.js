const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  image: {
    type: String,
    required: true,
  },

description: {
  type: String,
  required: true,
}

});

module.exports = mongoose.model('franchises', GameSchema)
