const  { User, genre, platform, Videogame} = require('../../db')
const { Op } = require('sequelize')


const findUser = async (nick_email) => {
    const user = await User.findOne({
        where: {
            [Op.or]: [
                { Email: nick_email },
                { nickname: nick_email }
            ]
        },
        include: {
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
        }
    }, )
    
    return user? user.dataValues: user
}

module.exports = findUser