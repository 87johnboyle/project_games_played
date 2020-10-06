exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

const Game = require('../models/Game');

exports.getIndex = async (req, res) => {
    const game = await Game.find((data) => data);

    try {
        console.log(game);
        res.status(200).render('index', { game: game });
    } catch (error) {
        console.log(error);
    }
};

exports.getGame = async (req, res) => {
    const gameId = req.params.gameId;

    const game = await Game.findById(gameId, (game) => game);

    try {
        console.log(game);
        res.status(200).render('game', { game: game });
    } catch (error) {
        console.log(error);
    }
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
