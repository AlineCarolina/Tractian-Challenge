import mongoose from 'mongoose';
import unitsSchema from '../schemas/unitsSchema';

const Units = mongoose.model('Unit', unitsSchema.unitsSchema);

async function getUnits() {
  const units = await Units.find();
  return units;
}

async function createUnit({ unidade, empresa }) {
  const unit = await Units.create({ unidade, empresa });
  return unit;
}

async function updateUnit({ unidade, empresa }, id) {
  const unit = await Units.findByIdAndUpdate(id, { unidade, empresa });
  return unit;
}

async function deleteUnit(id) {
  const unit = await Units.findOneAndDelete({ _id: id });
  return unit;
}

export default {
  getUnits,
  createUnit,
  updateUnit,
  deleteUnit,
};
