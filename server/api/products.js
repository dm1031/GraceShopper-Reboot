const express = require('express')
const router = express.Router()

const { Product } = require('../../server/db/models')

router.get('/', (req, res, next) => {
  return Product.findAll()
    .then(products => res.send(products))
    .catch(next)
})

module.exports = router
