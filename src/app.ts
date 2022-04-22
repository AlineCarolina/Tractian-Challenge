import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import companiesController from './controllers/companiesController';

dotenv.config();
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/db')
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => console.log(`Online: ${port}`));

app.get('/companies', companiesController.getCompanies);

app.post('/companies', companiesController.createCompany);
