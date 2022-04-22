import { Schema } from 'mongoose';

const unitsSchema = new Schema({
  unidade: String,
  empresa: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
});

export default {
  unitsSchema,
};