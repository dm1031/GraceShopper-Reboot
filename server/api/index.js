const express = require('express')
const router = express.Router()
// ------- users
router.use('/users', require('./users'))

// ------- products
router.use('/products', require('./products'))

// ------- orders
router.use('/orders', require('./orders'))

module.exports = router
