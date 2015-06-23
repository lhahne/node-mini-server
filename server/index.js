'use strict'

const port = process.env.VCAP_APP_PORT || 8080

const restify = require('restify')
const server  = restify.createServer()

server.get('/', (req, res, next) => {
  res.send({a: 'ok'})
  next()
})

server.listen(port, () => {
  console.log('server running at 8080')
})
