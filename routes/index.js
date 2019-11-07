const routes = require('express').Router();
const userRouter = require('./user');
const imageRouter = require('./image')


routes.use('/user', userRouter)
routes.use('/image',imageRouter)



module.exports = routes