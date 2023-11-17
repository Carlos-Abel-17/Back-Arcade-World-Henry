
const {Videogame, genre, platform, User } = require('../../db')
const isNumeric = require('../../utils/isNumeric')
const startParse = require('../../utils/starsParse')
const formaterGame = require('../VGControlers/formaterGame')


const getGameById = async (id) => {
    const gamebyId = await Videogame.findByPk(id, {
        include: [
            {
                model: genre,
                attributes: ['name']
            },
            {
                model: platform,
                attributes: ['name']
            },
            { model: User }
        ]
    });
    if(!gamebyId) return null

    const parseGme = formaterGame(gamebyId)

    return parseGme
}

module.exports = getGameById