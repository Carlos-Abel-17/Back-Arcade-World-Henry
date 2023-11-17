const { Router } = require("express") ;
const { verifyToken } = require("../../middleware/verifyToken");
const {
    getUsersHandler,
    userRegisterHandler,
    loginUserHandler,
    VG_userHandler,
    updateUserHandler,
    firebaseHandler,
    getuserById,
    deleteUserHandler
  } = require("../../handlers/UserHandlers") ;
const {userMidellweare, adminMidellweare} = require('../../middleware/verifyToken')

const UserRouter = Router()

UserRouter.get('/', /*adminMidellweare,*/ getUsersHandler)
UserRouter.post('/register', userRegisterHandler)
UserRouter.post('/login', loginUserHandler)
UserRouter.put('/logout', VG_userHandler)
UserRouter.put('/update', updateUserHandler)
UserRouter.post('/firebase', firebaseHandler)
UserRouter.get('/:id', /*userMidellweare,*/ getuserById)
UserRouter.put('/delete', deleteUserHandler)

module.exports =  UserRouter