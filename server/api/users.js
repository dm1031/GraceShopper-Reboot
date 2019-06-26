const express = require('express')
const router = express.Router()

const { User } = require('../../server/db/models')

router.get('/', (req, res, next) => {
  return User.findAll()
    .then(users => res.send(users))
    .catch(next)
})

module.exports = router
