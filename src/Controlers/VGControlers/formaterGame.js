const isNumeric = require('../../utils/isNumeric')
const startParse = require('../../utils/starsParse')

 const formaterGame = (game) => {
    const reviews = game.Users.filter(user => user.VG_user.review !== null ).map(user => {
        return {
            userId: user.id,
            nickName: user.nickname,
            photo: user.image,
            lastUpdate: user.VG_user.review.editedAt.toISOString().slice(0, 10),
            review: user.VG_user.review.value
        };
    });

    let graphics = game.Users.filter(user => isNumeric(user.VG_user.graphics)).map(user => user.VG_user.graphics);
    graphics = {
        stars: startParse(graphics),
        score: graphics.length? (graphics.reduce((total, star) => total + star, 0)/(graphics.length)).toFixed(1): '0.0'
    }

    let gameplay = game.Users.filter(user => isNumeric(user.VG_user.gameplay)).map(user => user.VG_user.gameplay);
    gameplay = {
        stars: startParse(gameplay),
        score: gameplay.length? (gameplay.reduce((total, star) => total + star, 0)/(gameplay.length)).toFixed(1): '0.0'
    }

    let quality_price = game.Users.filter(user => isNumeric(user.VG_user.quality_price)).map(user => user.VG_user.quality_price);
    quality_price = {
        stars: startParse(quality_price),
        score: quality_price.length? (quality_price.reduce((total, star) => total + star, 0)/(quality_price.length)).toFixed(1): '0.0'
    }


    const parce = {
        id: game.id,
        name: game.name,
        description: game.description,
        image: game.image,
        price: game.price,
        released: game.released,
        isActive: game.isActive,
        createdAt: game.createdAt.toISOString().slice(0, 10),
        updatedAt: game.updatedAt.toISOString().slice(0, 10),
        genres: game.genres.map(g => g.name),
        platforms: game.platforms.map(p => p.name),
        reviews,
        graphics,
        gameplay,
        quality_price
    };

    return parce
 }

 module.exports = formaterGame