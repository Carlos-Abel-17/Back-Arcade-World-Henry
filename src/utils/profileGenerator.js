const { User } = require('../db')
const { Op } = require('sequelize')

const profileGenerator = async (decodeValue) => {
    const {name, picture, email, uid} = decodeValue
    const username = name.split(' ')[0]
    const userLastname = name.split(' ')[1]
    try {
        const allUsers = await User.findAll({
            where: { 
                nickname: {[Op.iLike]: `%${username}%`}
            }
        })

        return {
            name: username,
            lastname: userLastname,
            nickname: `${username}#${allUsers.length + 1}`,
            Email: email,
            image: picture,
            uid: uid
        }
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = profileGenerator