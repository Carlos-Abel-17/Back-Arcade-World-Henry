const { User, genre, platform, Videogame, Purchase, Cart } = require('../../db')
const isNumeric = require ('../../utils/isNumeric')
const starsParse = require('../../utils/starsParse')
const loginformaterUser = require('./loginformaterUser')

const getAllUsers = async () => {
    const allUsers = await User.findAll({
        include: [
            {
                model: Videogame,
                include: [
                    {
                        model: genre,
                        attributes: ['name']
                    },
                    {
                        model: platform,
                        attributes: ['name']
                    },
                ],
            },
            {
                model: Purchase,
                include: {
                    model: Videogame,
                    attributes: ['id','name', 'image']
                }
            },
            {
                model: Cart,
                include: {
                    model: Videogame,
                    attributes: ['id','name', 'image', 'price', ]
                }
            }
        ]
    })

    const allUsersParce = allUsers.map(user => loginformaterUser(user))

    return allUsersParce

}

module.exports = getAllUsers