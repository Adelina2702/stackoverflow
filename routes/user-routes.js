const router = require('express').Router()

const UserController = require('./../controllers/user-contoller')

router.post('/signup', UserController.signup)
router.post('/login', UserController.login)
router.get('/', UserController.getAll)
router.get('/activate/:link', UserController.activate)

module.exports = router