const db = require('../db')

const Product = db.define('product', {
  id: {
    type: db.Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: db.Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  categoryId: {
    type: db.Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Product
