const Game = require('../models/Game.model');

module.exports.list = (req, res, next) => {
  Game.find()
    .populate('user')
    .then(Games => {
      res.json(Games);
    })
    .catch(next)
}

module.exports.create = (req, res, next) => {
  Game.create(req.body)
    .then(Game => {
      res.status(201).json(Game)
    })
    .catch(next)
}