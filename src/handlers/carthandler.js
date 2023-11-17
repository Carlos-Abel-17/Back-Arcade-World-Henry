const { User, VG_user, Videogame, Purchase, Cart } = require('../db')
const { Op } = require('sequelize')
const Stripe = require('stripe')
require('dotenv').config()
const { STRIPE_KEY } = process.env
const stripe = Stripe(STRIPE_KEY)

const purchasedhandler = async (req, res) => {
    const {UserId, GamesIds} = req.body
    try {
        const user = await User.findOne({
            where: {
                id: UserId
            }
        })

        const games = await Videogame.findAll({// si algun id no existe compra los que si XD
            where: {
                [Op.or]:GamesIds.map( gameId => {
                    return { id: gameId }
                })
            }
        })

        if(!user) return res.status(200).json({error: "id de usuario incorrecto"})

        const session = await stripe.checkout.sessions.create({
            line_items: games.map( vg => {
                return{
                    price_data:{
                        product_data:{
                            name: vg.name,
                            description: `Thanks, ${vg.name} is amazing, enjoy it.`
                        },
                        currency: 'usd',
                        unit_amount: Number((vg.price*100).toFixed(2))
                    },
                    quantity: 1
                }
            }),
            mode: 'payment',
            success_url: 'https://monumental-dragon-891db4.netlify.app/cart/summary',
            cancel_url: `https://monumental-dragon-891db4.netlify.app/cart/failed`,
          });

        res.status(200).json({
            session_url: session.url,
            amount: Number((games.reduce((total, vg)=> total + vg.price, 0)).toFixed(2))
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const cartSuccessHandler = async (req, res) => {
    const {UserId, GamesIds, amount} = req.body
    try {
        const newPurchase = await Purchase.create({
            amount,
            paymentMethod: 'stripe',
            UserId: UserId
        })

        //
        await newPurchase.addVideogame(GamesIds)
        res.status(200).json({success: 'new purchase added'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateCartHandler = async (req, res) => {
    const {UserId, GamesIds} = req.body
    console.log(UserId);
    try {
        const userCart = await Cart.findOne({
            where: {UserId},
            include: {model: Videogame}
        })
        
        if(userCart){
            const prevGamesIds = userCart.Videogames.map( vg => vg.id)
            const IdsToDelete = prevGamesIds.filter( vgId => !GamesIds.includes(vgId) )
            const IdsToAdd = GamesIds.filter( vgId => !prevGamesIds.includes(vgId) )
            await userCart.removeVideogames(IdsToDelete)
            await userCart.addVideogames(IdsToAdd)
        }else{
            const newCart = await Cart.create({UserId})
            await newCart.addVideogames(GamesIds)
        }

        res.status(200).json({success: 'Cart updated'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    purchasedhandler,
    cartSuccessHandler,
    updateCartHandler,
}