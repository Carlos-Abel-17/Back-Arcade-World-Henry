const { Videogame, genre, platform, User } = require('../../db')
const { Op } = require('sequelize')
const isNumeric = require('../../utils/isNumeric')
const starsParse = require('../../utils/starsParse')
const formaterGame = require('../VGControlers/formaterGame')

const getVGbyName =  async (name) => {

    const tofind = name.split(' ') //"war gragon" → ["war", "dragon"], ["portal"]
        let gameByName = await Videogame.findAll({
            where: {
                [Op.or]: tofind.map(str => {
                    return {
                        name: {
                            [Op.iLike]: `%${str}%`
                        }
                    };
                })
            },
            include:[
                { model: genre },
                { model: platform },
                { model: User }
            ]
        })

        const gameByNameparsed = gameByName.map(vg => formaterGame(vg))

        return gameByNameparsed
}

module.exports = getVGbyName