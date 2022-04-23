import assetsService from "../services/assetsService";

const getAssets = async (_req, res) => {
  try {
    const assets = await assetsService.getAssets();
    return res.status(200).json(assets);
  } catch (error) {
    return console.log(error.message);
  }
};

const createAsset = async (req, res) => {
  const { nome, image, description, model, owner, status, healthLevel } = req.body;

  try {
    const asset = await assetsService.createAsset({ nome, image, description, model, owner, status, healthLevel });
    return res.status(200).json(asset);
  } catch (error) {
    return console.log(error.message);
  }
};

const updateAsset = async (req, res) => {
  const { id } = req.params;
  const { nome, image, description, model, owner, status, healthLevel } = req.body;

  try {
    const asset = await assetsService.updateAsset({ nome, image, description, model, owner, status, healthLevel }, id);
    return res.status(200).json(asset);
  } catch (error) {
    return console.log(error.message);
  }
};

const deleteAsset = async (req, res) => {
  const { id } = req.params;

  try {
    const asset = await assetsService.deleteAsset(id);
    return res.status(200).json(asset);
  } catch (error) {
    return console.log(error.message);
  }
};

export default {
  getAssets,
  createAsset,
  updateAsset,
  deleteAsset,
};