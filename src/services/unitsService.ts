import unitsModel from "../models/unitsModel";

const getUnits = async () => {
  const units = await unitsModel.getUnits();
  return units;
};

const createUnit = async ({ unidade, empresa }) => {
  const unit = await unitsModel.createUnit({ unidade, empresa });
  return unit;
};

const updateUnit = async ({ unidade, empresa }, id) => {
  const unit = await unitsModel.updateUnit({ unidade, empresa }, id);
  return unit;
};

const deleteUnit = async (id) => {
  const unit = await unitsModel.deleteUnit(id);
  return unit;
};

export default {
  getUnits,
  createUnit,
  updateUnit,
  deleteUnit,
};