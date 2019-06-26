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

module.exports = User
