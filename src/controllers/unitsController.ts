import unitsService from "../services/unitsService";

const getUnits = async (_req, res) => {
  try {
    const units = await unitsService.getUnits();
    return res.status(200).json(units);
  } catch (error) {
    return console.log(error.message);
  }
};

const createUnit = async (req, res) => {
  const { unidade, empresa } = req.body;
  try {
    const unit = await unitsService.createUnit({ unidade, empresa });
    return res.status(200).json(unit);
  } catch (error) {
    return console.log(error.message);
  }
};

const updateUnit = async (req, res) => {
  const { unidade, empresa } = req.body;
  const { id } = req.params;
  try {
    const unit = await unitsService.updateUnit({ unidade, empresa }, id);
    return res.status(200).json(unit);
  } catch (error) {
    return console.log(error.message);
  }
};

const deleteUnit = async (req, res) => {
  const { id } = req.params;
  try {
    const unit = await unitsService.deleteUnit(id);
    return res.status(200).json(unit);
  } catch (error) {
    return console.log(error.message);
  }
};

export default {
  getUnits,
  createUnit,
  updateUnit,
  deleteUnit,
};