const db = require('./db')
const { User, Product, Category, Order } = require('./models')

const initDb = (force = false) => {
  return db
    .authenticate()
    .then(() => {
      Product.belongsTo(Category)
      Category.hasMany(Product)

      Order.belongsTo(User)
      User.hasMany(Order)

      Product.belongsToMany(Order, { through: 'ordersProducts' })
      Order.hasMany(Product)

      return db.sync({ force })
    })
    .then(() => console.log('database connected!'))
}

module.exports = initDb
