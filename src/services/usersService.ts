import usersModel from "../models/usersModel";

const getUsers = async () => {
  const users = await usersModel.getUsers();
  return users;
};

const createUser = async ({ name, empresa }) => {
  const user = await usersModel.createUser({ name, empresa });
  return user;
}

const updateUser = async ({ id, name, empresa }) => {
  const user = await usersModel.updateUser({ id, name, empresa });
  return user;
};

const deleteUser = async (id) => {
  const user = await usersModel.deleteUser(id);
  return user;
};

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};