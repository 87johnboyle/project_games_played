exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

const Game = require('../models/Game');

exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

exports.getAddGame = (req, res) => {
    res.status(200).render('edit-game');
};

exports.postGame = (req, res) => {
    const { name, image, description } = req.body;

    const game = new Game({ name: name, image: image, description: description });
    game.save();
    console.log('Game Added to the database');
    res.status(201).redirect('/');
};
