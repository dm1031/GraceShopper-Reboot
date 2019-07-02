const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'index.html'))
)

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
)

// ------- middleware for parsing data off the request object
app.use(bodyParser.json())

// ------- middleware to establish the API and auth routers
app.use('/api', require('./api'))
app.use('/auth', require('./auth/auth'))

app.use('/public', express.static(path.join(__dirname, '..', 'public')))

// ------- error handling endware
app.use((err, req, res, next) => {
  let error
  const status = err.status || 500
  if (err.errors) {
    error = err.errors.map(currError => currError.message)
  } else {
    error = err.message
  }
  res.status(status).send(error)
})

module.exports = app
