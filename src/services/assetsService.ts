import assetsModel from "../models/assetsModel";

const getAssets = async () => {
  const assets = await assetsModel.getAssets();
  return assets;
};

const createAsset = async ({ nome, image, description, model, owner, status, healthLevel }) => {
  const asset = await assetsModel.createAsset({ nome, image, description, model, owner, status, healthLevel });
  return asset;
};

const updateAsset = async ({ nome, image, description, model, owner, status, healthLevel }, id) => {
  const asset = await assetsModel.updateAsset({ nome, image, description, model, owner, status, healthLevel }, id);
  return asset;
};

const deleteAsset = async (id) => {
  const asset = await assetsModel.deleteAsset(id);
  return asset;
};

export default {
  getAssets,
  createAsset,
  updateAsset,
  deleteAsset,
};