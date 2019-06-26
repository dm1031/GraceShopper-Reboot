const { User, Product, Category, Order } = require('../server/db/models')
const initDb = require('../server/db/index')
const faker = require('faker')

const createSeedInstance = (model, data) => {
  return Promise.all(data.map(dataObject => model.create(dataObject)))
}

const createUser = quantity => {
  const users = []

  for (let i = 0; i < quantity; ++i) {
    let user = {
      email: faker.internet.email(),
      password: faker.internet.password()
    }
    users.push(user)
  }
  return users
}

const createCategories = quantity => {
  const categories = []
  for (let i = 0; i < quantity; ++i) {
    let category = {
      name: faker.commerce.product()
    }
    categories.push(category)
  }
  return categories
}

const createProducts = (quantity, categories) => {
  const products = []

  for (let i = 0; i < quantity; ++i) {
    let product = {
      name: faker.commerce.productName(),
      price: (Math.random() * 100).toFixed(2),
      categoryId: categories[Math.floor(Math.random() * categories.length)].id
    }
    products.push(product)
  }
  return products
}

const syncAndSeed = async () => {
  await initDb(true)
  const users = await createSeedInstance(User, createUser(5))
  const categories = await createSeedInstance(Category, createCategories(5))
  const products = await createSeedInstance(
    Product,
    createProducts(10, categories)
  )

  console.log('database seeded!')
}

module.exports = syncAndSeed
