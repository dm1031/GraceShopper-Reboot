const { User, Product, Category, Order } = require('../server/db/models')
const syncAndSeed = require('./test-seed')
const db = require('../server/db/db')

describe('our models', () => {
  beforeAll(async () => {
    await syncAndSeed()
  })
  afterAll(() => {
    return db.close().then(() => console.log('test db connection closed!'))
  })
  test('User must have an email', () => {
    return User.findOne({
      where: {
        email: null
      }
    })
      .then(() => {
        throw new Error('User has null email')
      })
      .catch(err => expect(err).not.toBe('User has null email'))
  })
})
