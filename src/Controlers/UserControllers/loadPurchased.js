const { VG_user } = require('../../db') 

const loadPurchased = async (UserId, purchased) => {
    ////→→ carga los comprados ←←////
        // → busca comprados previos:
        const userPurRelation_prev = await VG_user.findAll({ where: {
            UserId: UserId,
            favorites: true
        }})
        // → elimina los comprados previos:
        for(const relation of userPurRelation_prev){
            await VG_user.update({ purchased: false}, {
                where: {
                    UserId: UserId,
                    VideogameId: relation.dataValues.VideogameId
                }
            })
        }
        // → coloca los nuevos comprados:
        for(const GameId of purchased){

            const userFavRelation = await VG_user.findOne({ where: { 
                UserId: UserId,
                VideogameId: GameId
            } })

            if(userFavRelation){
                await VG_user.update({ purchased: true }, {
                    where: {
                        UserId: UserId,
                        VideogameId: GameId
                    }
                  });
            } else{
                await VG_user.create({
                    UserId: UserId,
                    VideogameId: GameId,
                    purchased: true,
                  });
            }
        }
}

module.exports = loadPurchased