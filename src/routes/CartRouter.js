const { Router } = require("express") ;
const {
    purchasedhandler,
    cartSuccessHandler,
    updateCartHandler
  } = require("../handlers/carthandler") ;

const CartRouter = Router()

CartRouter.post('/purchased', purchasedhandler)
CartRouter.post('/success', cartSuccessHandler)
CartRouter.put('/', updateCartHandler)


module.exports =  CartRouter