const router = require('express').Router()

const auth = require('../middlewares/auth-middleware')
const ProblemController = require('./../controllers/problem-controller')

router.post('/create', auth, ProblemController.create)
router.get('/', ProblemController.getAll)

module.exports = router