const db = require('../db')

const OrdersProducts = db.define('ordersProducts', {
  productId: {
    type: db.Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  orderId: {
    type: db.Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = OrdersProducts
