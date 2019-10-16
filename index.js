window = {}

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const swaggerUi = require('swagger-ui-express')
const mongoose = require('mongoose')

const userRouter = require('./routes/user')

const swaggerDocument = require('./swagger.json')

mongoose.connect('mongodb://db:27017/test', { useNewUrlParser: true })
  .then(() => console.log('I am connected'))
  .catch(error => console.log(error));

app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (_, res) => {
  res.json({ message: "hello there" })
})

// This is for test api call

app.get('/dummy', (_, res) => {
  res.json({ message: "Test is passed" })
})

// routers

app.use('/user', userRouter)

app.listen(3000, () => console.log('server started'))