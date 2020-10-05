const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-game', adminController.getAddGame);

router.post('/add-game', adminController.postGame);

module.exports = router
