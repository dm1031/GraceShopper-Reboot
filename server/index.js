const port = process.env.PORT || 3000
const app = require('./app')
const initDb = require('./db/index')

initDb()
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`))
  })
  .catch(err => console.log('server not connected: ', err))
