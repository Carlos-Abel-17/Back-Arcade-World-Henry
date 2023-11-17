const { VG_user } = require('../../db') 
const { Op } = require('sequelize')

const loadReviews = async (UserId, reviews) => {
    ////→→ carga los Reviews ←←////
        // → busca reviews previos:
       /* const userRevRelation_prev = await VG_user.findAll({
            where: {
              UserId: UserId,
              review: {
                [Op.ne]: null
                }
            }
          });
        // → elimina los reviews previos:
        for(const relation of userRevRelation_prev){
            await VG_user.update({ review: null}, {
                where: {
                    UserId: UserId,
                    VideogameId: relation.dataValues.VideogameId
                }
            })
        }*/
        // → coloca los nuevos reviews:
        for(const reviewFromUser of reviews){

            const userRevRelation = await VG_user.findOne({ where: { 
                UserId: UserId,
                VideogameId: reviewFromUser.GameId
            } })

            if(userRevRelation){
                await VG_user.update({ review: reviewFromUser.review }, {
                    where: {
                        UserId: UserId,
                        VideogameId: reviewFromUser.GameId
                    }
                  });
            } else{
                await VG_user.create({
                    UserId: UserId,
                    VideogameId: reviewFromUser.GameId,
                    review: reviewFromUser.review,
                  });
            }
        }
}

module.exports = loadReviews