const { Purchase, Videogame, User, platform, genre } = require('../db')
const parseDate = require('../utils/parseDate')
const parsePurchase = require('../Controlers/parsePurchase')
const { validate } = require('uuid')

const getAllPurchases = async (req, res) => {
    try {
        const allPurchases = await Purchase.findAll({
            include: [
                {
                    model: Videogame,
                    include: [
                        {model: platform},
                        {model: genre}
                    ]
                },
                {model: User}
            ]
        })

        const parsePur = allPurchases.map( pur => parsePurchase(pur))

        res.status(200).json(parsePur)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const detailPurchaseHandler = async (req, res) => {
    const { id } = req.params
    try {
        if(!validate(id)) return res.json({error: 'id is not a uuid'})
        const purchase = await Purchase.findByPk(id, {
            include: [
                {
                    model: Videogame,
                    include: [
                        {model: platform},
                        {model: genre}
                    ]
                },
                {model: User}
            ]
        })

        if(!purchase) return res.json({error: 'purchase not found'})
        const parcedPurchase = parsePurchase(purchase)
        res.status(200).json(parcedPurchase)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllPurchases,
    detailPurchaseHandler
}