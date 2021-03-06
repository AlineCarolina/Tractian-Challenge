import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import companiesController from './controllers/companiesController';
import usersController from './controllers/usersController';
import unitsController from './controllers/unitsController';
import assetsController from './controllers/assetsController';
import { ConnectOptions } from 'mongodb';

dotenv.config();
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const url = 'mongodb://db:27017/db';

mongoose.connect(url, {
  useNewUrlParser: true,
} as ConnectOptions)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => console.log(`Online: ${port}`));

app.get('/companies', companiesController.getCompanies);

app.post('/companies', companiesController.createCompany);

app.post('/companies/:id', companiesController.updateCompany);

app.delete('/companies/:id', companiesController.deleteCompany);

app.get('/users', usersController.getUsers);

app.post('/users', usersController.createUser);

app.post('/users/:id', usersController.updateUser);

app.delete('/users/:id', usersController.deleteUser);

app.get('/units', unitsController.getUnits);

app.post('/units', unitsController.createUnit);

app.post('/units/:id', unitsController.updateUnit);

app.delete('/units/:id', unitsController.deleteUnit);

app.get('/assets', assetsController.getAssets);

app.post('/assets', assetsController.createAsset);

app.post('/assets/:id', assetsController.updateAsset);

app.delete('/assets/:id', assetsController.deleteAsset);