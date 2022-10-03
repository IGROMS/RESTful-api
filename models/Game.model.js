const mongoose = require('mongoose');

const  GameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Te has olvidado de poner un nombre melón']
    },
    description: {
      type: String,
      required: [true, 'Pero y este juego de qué va?']
    },
    img: {
      type: String,

    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
    
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

const Game = mongoose.model('Game', GameSchema)

module.exports = Game