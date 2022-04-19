const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://db:27017/db', {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.log(error);
  });

app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${port} </h1>`));
app.listen(port, () => console.log(`Online: ${port}`));
