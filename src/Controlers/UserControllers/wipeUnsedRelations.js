
const { VG_user } = require('../../db') 

const wipeUnsedRelations = async () => {
    const unusedRelations = await VG_user.findAll({where: {
        favorites: false,
        review: null,
        graphics: null,
        gameplay: null,
        quality_price: null
    }})
    // → elimina todas las relaciones vacias:
    for(const unused of unusedRelations){
        await unused.destroy()
    }
}

module.exports = wipeUnsedRelations