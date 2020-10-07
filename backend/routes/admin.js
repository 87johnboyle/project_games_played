const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-game', adminController.getAddGame);

router.get('/edit-game/:gameId', adminController.getEditGame)

router.get('/:gameId', adminController.getGame);

router.post('/add-game', adminController.postGame);

router.post('/edit-game', adminController.postEditGame)

router.post('/delete', adminController.postDelete);

module.exports = router
