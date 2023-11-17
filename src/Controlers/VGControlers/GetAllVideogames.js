const { Videogame, genre, platform, User } = require('../../db');
const formaterGame = require('../VGControlers/formaterGame')

const GetAllVideogames = async () => {
    const games = await Videogame.findAll({
        include: [
            { model: genre },
            { model: platform },
            { model: User }
        ],
        where: {isActive: true}
    });

    const gamesParsed = games.map(vg => formaterGame(vg));

    return gamesParsed;
};

module.exports = GetAllVideogames;
