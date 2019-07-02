const express = require('express')
const router = express.Router()

const { User } = require('../../server/db/models')

router.post('/', (req, res, next) => {
  return User.confirmCredentials(req.body)
    .then(data => {
      const { errors, loggedIn } = data
      if (!errors) {
        res.send(loggedIn)
      } else {
        throw new Error(errors)
      }
    })
    .catch(next)
})

module.exports = router
