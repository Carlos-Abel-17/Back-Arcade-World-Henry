const { Router } = require("express") ;
const {
    getAllPurchases,
    detailPurchaseHandler
  } = require("../handlers/purchaseHandler") ;

const PurchaseRouter = Router()

PurchaseRouter.get('/', getAllPurchases)
PurchaseRouter.get('/:id', detailPurchaseHandler)

module.exports =  PurchaseRouter