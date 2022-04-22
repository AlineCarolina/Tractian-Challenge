import { Schema } from 'mongoose';

const usersSchema = new Schema({
  name: String,
  empresa: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
});

export default {
  usersSchema,
};