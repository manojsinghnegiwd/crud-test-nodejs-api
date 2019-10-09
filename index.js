const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://db:27017/test', { useNewUrlParser: true })
  .then(() => console.log('I am connected'))
  .catch(error => console.log(error));

app.get('/', (_, res) => {

  res.json({ message: "hello there" })
})

app.listen(3000, () => console.log('server started'))