import mongoose from 'mongoose';
import assetsSchemas from '../schemas/assetsSchemas';

const Assets = mongoose.model('Asset', assetsSchemas.assetsSchemas);

async function getAssets() {
  const assets = await Assets.find();
  return assets;
}

async function createAsset({ nome, image, description, model, owner, status, healthLevel }) {
  const asset = await Assets.create({ nome, image, description, model, owner, status, healthLevel });
  return asset;
}

async function updateAsset({ nome, image, description, model, owner, status, healthLevel }, id) {  
  const asset = await Assets.findByIdAndUpdate(id, { nome, image, description, model, owner, status, healthLevel });
  return asset;
}

async function deleteAsset(id) {
  const asset = await Assets.findOneAndDelete({ _id: id });
  return asset;
}

export default {
  getAssets,
  createAsset,
  updateAsset,
  deleteAsset,
};