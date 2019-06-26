const express = require('express')
const app = express()
const path = require('path')

// ------- send to browser
// app.get('/app.js', (req, res, next) =>
//   res.sendFile(path.join(__dirname, '..', 'dist', 'main.js'))
// )

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'index.html'))
)

// ------- middleware to establish the API and auth routers
app.use('/api', require('./api'))
app.use('/auth', require('./auth/auth'))

app.use('/public', express.static(path.join(__dirname, '..', 'public')))

module.exports = app
