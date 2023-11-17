
const { VG_user } = require('../../db') 

const loadFavorites = async (UserId, favorites) => {
    ////→→ carga los favoritos ←←////
        // → busca favoritos previos:
    /*const userFavRelation_prev = await VG_user.findAll({ where: {
        UserId: UserId,
        favorites: true
    }})
    // → elimina los favoritos previos:
    for(const relation of userFavRelation_prev){
        await VG_user.update({ favorites: false}, {
            where: {
                UserId: UserId,
                VideogameId: relation.dataValues.VideogameId
            }
        })
    }
    // → coloca los nuevos favoritos:*/
    for(const GameId of favorites){
        
        const userFavRelation = await VG_user.findOne({ where: { 
            UserId: UserId,
            VideogameId: GameId
        } })
        
        if(userFavRelation){
            await VG_user.update({ favorites: true }, {
                where: {
                    UserId: UserId,
                    VideogameId: GameId
                }
            });
        } else{
            await VG_user.create({
                UserId: UserId,
                VideogameId: GameId,
                favorites: true,
            });
        }
    }
}

module.exports = loadFavorites