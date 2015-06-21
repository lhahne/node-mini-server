'use strict'

const restify = require('restify')
const server  = restify.createServer()

server.get('/', (req, res, next) => {
  res.send({a: 'ok'})
  next()
})

server.listen(8080, () => {
  console.log('server running at 8080')
})
