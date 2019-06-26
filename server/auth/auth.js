const express = require('express')
const router = express.Router()

const { User } = require('../../server/db/models')

router.get('/', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(user => res.send(user))
    .catch(next)
})

module.exports = router
