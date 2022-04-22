import { Schema, model } from 'mongoose';
import { CompaniesInterface } from '../interfaces.ts/companiesInterface';

const usersSchema = new Schema({
  name: String,
});

const assetsSchema = new Schema({
  image: String,
  name: String,
  description: String,
  model: String,
  owner: String,
  status: String,
  healthLevel: String,
});

const unitsSchema = new Schema({
  unitName: [String],
  assets: [assetsSchema],
});

const companiesSchema = new Schema<CompaniesInterface>({
  name: String,
  users: [usersSchema],
  units: [unitsSchema],
});

const Companies = model('Companies', companiesSchema);

export default Companies;
