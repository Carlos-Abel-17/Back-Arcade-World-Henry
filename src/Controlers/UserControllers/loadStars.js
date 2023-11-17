const { VG_user } = require("../../db");
const { Op } = require("sequelize");

const loadStars = async (UserId, graphics, gameplay, quality_price) => {
  if (graphics) {
    ////→→ carga los Graficos ←←////
    // → busca Graficos previos:
    /*const useGraphRelation_prev = await VG_user.findAll({
      where: {
        UserId: UserId,
        graphics: {
          [Op.ne]: null,
        },
      },
    });
    // → elimina los Graficos previos:
    for (const relation of useGraphRelation_prev) {
      await VG_user.update(
        { graphics: null },
        {
          where: {
            UserId: UserId,
            VideogameId: relation.dataValues.VideogameId,
          },
        }
      );
    }*/
    // → coloca los nuevos Graficos:
    for (const GraphFromUser of graphics) {
      const userGraphRelation = await VG_user.findOne({
        where: {
          UserId: UserId,
          VideogameId: GraphFromUser.GameId,
        },
      });

      if (userGraphRelation) {
        await VG_user.update(
          { graphics: GraphFromUser.stars },
          {
            where: {
              UserId: UserId,
              VideogameId: GraphFromUser.GameId,
            },
          }
        );
      } else {
        await VG_user.create({
          UserId: UserId,
          VideogameId: GraphFromUser.GameId,
          graphics: GraphFromUser.stars,
        });
      }
    }
  }

  if (gameplay) {
    ////→→ carga los Gameplay ←←////
    // → busca Gameplay previos:
    /*const useGPrelation_prev = await VG_user.findAll({
      where: {
        UserId: UserId,
        gameplay: {
          [Op.ne]: null,
        },
      },
    });
    // → elimina los Gameplay previos:
    for (const relation of useGPrelation_prev) {
      await VG_user.update(
        { gameplay: null },
        {
          where: {
            UserId: UserId,
            VideogameId: relation.dataValues.VideogameId,
          },
        }
      );
    }*/
    // → coloca los nuevos Gameplay:
    for (const GPfromUser of gameplay) {
      const userGPRelation = await VG_user.findOne({
        where: {
          UserId: UserId,
          VideogameId: GPfromUser.GameId,
        },
      });

      if (userGPRelation) {
        await VG_user.update(
          { gameplay: GPfromUser.stars },
          {
            where: {
              UserId: UserId,
              VideogameId: GPfromUser.GameId,
            },
          }
        );
      } else {
        await VG_user.create({
          UserId: UserId,
          VideogameId: GPfromUser.GameId,
          graphics: GPfromUser.stars,
        });
      }
    }
  }

  if (quality_price) {
    ////→→ carga los quality_price ratio ←←////
    // → busca quality_price ratio previos:
    /*const userQaRelation_prev = await VG_user.findAll({
      where: {
        UserId: UserId,
        quality_price: {
          [Op.ne]: null,
        },
      },
    });
    // → elimina los quality_price ratio previos:
    for (const relation of userQaRelation_prev) {
      await VG_user.update(
        { quality_price: null },
        {
          where: {
            UserId: UserId,
            VideogameId: relation.dataValues.VideogameId,
          },
        }
      );
    }*/
    // → coloca los nuevos quality_price ratio:
    for (const QPfromUser of quality_price) {
      const userQPRelation = await VG_user.findOne({
        where: {
          UserId: UserId,
          VideogameId: QPfromUser.GameId,
        },
      });

      if (userQPRelation) {
        await VG_user.update(
          { quality_price: QPfromUser.stars },
          {
            where: {
              UserId: UserId,
              VideogameId: QPfromUser.GameId,
            },
          }
        );
      } else {
        await VG_user.create({
          UserId: UserId,
          VideogameId: QPfromUser.GameId,
          quality_price: QPfromUser.stars,
        });
      }
    }
  }
};

module.exports = loadStars;
