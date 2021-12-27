const router = require('express').Router();

const userRoutes = require('./user-routes')
const problemRoutes = require('./problem-routes')

router.use('/user', userRoutes)
router.use('/problem', problemRoutes)


module.exports = router