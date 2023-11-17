const { User, Purchase } = require("../db");
const parseDate = require('./parseDate')

const userPur = async () => {
  const users = await User.findAll({
    include: { model: Purchase },
  });

  const toReturn = users.map((u) => {
    return{
        date: parseDate(u.dataValues.createdAt).date,
        purIds: u.Purchases.map(p => p.id)
    }
  })

  console.log(toReturn);
};

userPur()