const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

/*const generarJWT = (id, banstatus) => {
  return jwt.sign({id, banstatus}, process.env.JWT_SECRET, {
        expiresIn: "30d",
  })
}


const generarJWTAdmin = (id, admin, banstatus) => {
  return jwt.sign({id,admin, banstatus}, process.env.JWT_SECRETADMIN, {
        expiresIn: "30d",
  })
}
*/

const JWTgenerator = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d",
})
}


module.exports = { JWTgenerator }