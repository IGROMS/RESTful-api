const router = require('express').Router();
const usersController = require('../controllers/users.controller');
const gamesController = require('../controllers/games.controller');

router.get('/', (req, res, next) => res.json({ ok: true }));

// USERS

router.get('/users', usersController.list) // utilizaremos el plural del modelo que vamos a buscar
router.post('/users', usersController.create) // no ponemos un /create porque POST ya indica creación

// GAMES

router.get('/games', gamesController.list);
router.post('/games', gamesController.create);

module.exports = router;