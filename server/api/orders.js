const express = require('express')
const router = express.Router()

const { Order } = require('../../server/db/models')

router.get('/', (req, res, next) => {
  return Order.findAll()
    .then(orders => res.send(orders))
    .catch(next)
})

module.exports = router
