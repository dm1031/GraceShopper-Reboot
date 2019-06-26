const { User, Product, Category, Order } = require('../server/db/models')
const syncAndSeed = require('./test-seed')
const db = require('../server/db/db')

describe('our models', () => {
  beforeAll(() => {
    return syncAndSeed()
  })
  afterAll(() => {
    return db.close().then(() => console.log('test db connection closed!'))
  })
  test('Users are created', () => {
    return User.findAll().then(users => expect(users.length).toBe(5))
  })
  test('User must have an email', () => {
    return User.findAll({
      where: {
        email: null
      }
    }).then(user => expect(user.length).toBe(0))
  })
  test('product must have a categoryId', () => {
    return Product.findAll({
      where: {
        categoryId: null
      }
    }).then(product => expect(product.length).toBe(0))
  })
})
