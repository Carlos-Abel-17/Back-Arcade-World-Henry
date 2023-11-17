const parseDate = require('../utils/parseDate')

const parsePurchase = (purchase) => {
    return {
        purchaseId: purchase.id,
        userId: purchase.User.id,
        amount: purchase.amount,
        paymentMethod: purchase.paymentMethod,
        date:parseDate(purchase.createdAt).date,
        hour:parseDate(purchase.createdAt).hour,
        username: purchase.User.name,
        nickname: purchase.User.nickname,
        Email: purchase.User.Email,
        Videogames: purchase.Videogames.map( vg => {
            return {
                GameId: vg.id,
                name: vg.name,
                image: vg.image,
                platforms: vg.platforms.map( p => p.name),
                genres: vg.genres.map( g => g.name )

            }
        })
    }
}

module.exports = parsePurchase