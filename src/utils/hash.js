const bcrypt = require('bcrypt')
const saltRounds = 10

const hash = async (password) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        //console.log(hash);
        return hash
    } catch (error) {
        console.log(error);
    }
}

const compare = async (UserPassword, DBpasword) => {
    try {
        const isAutenticate = await bcrypt.compare(UserPassword, DBpasword)
        return isAutenticate
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    hash,
    compare
}
