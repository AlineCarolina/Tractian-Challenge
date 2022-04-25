import usersService from "../services/usersService";

const getUsers = async (_req, res) => {
  try {
    const users = await usersService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return console.log(error.message);
  }
};

const createUser = async (req, res) => {
  const { name, empresa } = req.body;
  try {
    const user = await usersService.createUser({ name, empresa });
    const token = await createToken(user);
    return res.status(201).json(user);
  } catch (error) {
    return console.log(error.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, empresa } = req.body;
  try {
    const user = await usersService.updateUser({ id, name, empresa });
    return res.status(200).json(user);
  } catch (error) {
    return console.log(error.message);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usersService.deleteUser(id);
    return res.status(200).json(user);
  } catch (error) {
    return console.log(error.message);
  }
};

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
function createToken(user: any) {
  throw new Error("Function not implemented.");
}

