import { Schema } from 'mongoose';

const assetsSchemas = new Schema({
  nome: String,
  image: String,
  description: String,
  model: String,
  owner: String,
  status: String,
  healthLevel: String,
});

export default {
  assetsSchemas,
};