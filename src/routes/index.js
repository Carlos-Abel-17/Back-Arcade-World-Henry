const { Router } = require('express') 
const VGrouter = require('./Grouter Videogames/VGrouter') 
const UserRouter = require('./Routers users/UserRouter')
const CartRouter = require('./CartRouter')
const PurchaseRouter = require('./PurchaseRouter')

const getplatformshandler = require('../handlers/getplatformshandler.js')
const getGeresHandler = require('../handlers/getGeresHandler.js')

const router = Router()

router.use('/videogame', VGrouter)
router.use('/user', UserRouter)
router.use('/cart', CartRouter)
router.use('/purchase', PurchaseRouter)

router.use('/platform', getplatformshandler)
router.use('/genre',getGeresHandler)

module.exports = router