const { Sequelize } = require('sequelize') 
require('dotenv').config()
const { DataTypes } = require('sequelize')

const Videogames = require('./models/Videogames.js')  
const Users = require('./models/Users.js')
const genres = require('./models/genres.js')
const platforms = require('./models/platforms.js')
const VG_users = require('./models/VG_User.js')
const Purchases = require('./models/Purchases.js')
const Carts = require('./models/Carts.js')

const { DB_USER, DB_PASSWORD, DB_HOST, IS_LOCAL, DATABASE_URL } = process.env

const DB_URL_LOCAL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/arcade`
const BD_URL_DEPLOY = DATABASE_URL
const BD_URL =  IS_LOCAL === 'true' ? DB_URL_LOCAL: BD_URL_DEPLOY

const sequelize = new Sequelize(BD_URL,{
    logging: false
})

Videogames(sequelize)
Users(sequelize)
genres(sequelize)
platforms(sequelize)
VG_users(sequelize)
Purchases(sequelize)
Carts(sequelize)


const { Videogame, User, genre, platform, VG_user, Purchase, Cart } = sequelize.models

///Las relaciones:

Videogame.belongsToMany(User, {through: VG_user})
User.belongsToMany(Videogame, {through: VG_user})

const Videogame_Genre = sequelize.define('videogame_Genre', {}, { timestamps: false });
Videogame.belongsToMany(genre, {through: Videogame_Genre})
genre.belongsToMany(Videogame, {through: Videogame_Genre})

const Videogame_Platform = sequelize.define('videogame_Plataform', {}, { timestamps: false });
Videogame.belongsToMany(platform, {through: Videogame_Platform})
platform.belongsToMany(Videogame, {through: Videogame_Platform})

User.hasMany(Purchase)
Purchase.belongsTo(User)

const Videogame_Purchase = sequelize.define('Videogame_Purchase', {}, { timestamps: false });
Videogame.belongsToMany(Purchase, {through: Videogame_Purchase})
Purchase.belongsToMany(Videogame, {through: Videogame_Purchase})

User.hasOne(Cart)
Cart.belongsTo(User)

const Videogame_Cart = sequelize.define('Videogame_Cart', {}, { timestamps: false });
Videogame.belongsToMany(Cart, {through: Videogame_Cart})
Cart.belongsToMany(Videogame, {through: Videogame_Cart})

console.log(sequelize.models);
module.exports = {
    conn: sequelize,
    ...sequelize.models
}
