const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const mongoose = require('mongoose')

const swaggerDocument = require('./swagger.json')

mongoose.connect('mongodb://db:27017/test', { useNewUrlParser: true })
  .then(() => console.log('I am connected'))
  .catch(error => console.log(error));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (_, res) => {

  res.json({ message: "hello there" })
})

app.listen(3000, () => console.log('server started'))