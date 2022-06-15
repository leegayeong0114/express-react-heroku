const express = require('express')
const router = express.Router()

const {MethodTest01, MethodTest02} = require('../controllers/TestController')

// /test
router.route('/test01').get(MethodTest01)
router.route('/test02').get(MethodTest02)

module.exports = router