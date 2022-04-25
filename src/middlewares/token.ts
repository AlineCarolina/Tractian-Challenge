import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const createToken = (user) => {
  const token = jwt.sign(user, process.env.SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
  return token;
};

export default {
  createToken
};
