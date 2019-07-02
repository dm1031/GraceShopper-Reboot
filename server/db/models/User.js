const db = require('../db')

const User = db.define('user', {
  id: {
    type: db.Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    primaryKey: true
  },
  email: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

User.confirmCredentials = function(credentials) {
  const results = {}
  return User.findOne({
    where: {
      email: credentials.email
    }
  }).then(user => {
    if (!user) {
      results.errors = 'There is no user associated with this email.'
    }
    if (user && user.password !== credentials.password) {
      results.errors = 'Password does not match our records for this email.'
    } else {
      results.loggedIn = user
    }
    return results
  })
}
module.exports = User
