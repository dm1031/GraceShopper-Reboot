const db = require('../db')

const Order = db.define('order', {
  id: {
    type: db.Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    primaryKey: true
  },
  cost: {
    type: db.Sequelize.DECIMAL(10, 2)
  }
})

module.exports = Order
