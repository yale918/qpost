const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000

const { MONGOURI_REIG } = require('./key.js')
const mongoose = require('mongoose')
mongoose.connect(MONGOURI_REIG, { useNewUrlParser: true, useUnifiedTopology: true });


server.use(express.json())

/****** Mongo Test ******/
mongoose.connection.on('connected', () => {
  console.log("connect to mongo yeahh")
})
mongoose.connection.on('error', () => {
  console.log("failed to connect mongo")
})

server.use(express.static('./client/build'))

require('./models/user.js')
require('./models/post.js')
server.use(require('./routers/auth'))
server.use(require('./routers/post'))
//server.use(require('./routers/tools'))




server.listen(PORT, () => {
  console.log("server listen on: ", PORT)
})