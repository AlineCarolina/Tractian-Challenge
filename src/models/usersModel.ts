import mongoose from 'mongoose';
import usersSchema from '../schemas/usersSchema';

const Users = mongoose.model('User', usersSchema.usersSchema);

async function getUsers() {
  const users = await Users.find();
  return users;
}

async function createUser({ name, empresa }) {
  const user = await Users.create({ name, empresa });
  return user;
}

async function updateUser({ id, name, empresa }) {
  const user = await Users.findByIdAndUpdate(id, { name, empresa });
  return user;
}

async function deleteUser(id) {
  const user = await Users.findOneAndDelete({ _id: id });
  return user;
}

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};