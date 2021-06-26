import { getRepository } from 'typeorm';
import { User } from '../../entities/user';
import jwt from 'jsonwebtoken';
//import config from '../../common/config';
import { checkHashPassword } from '../../helpers/hash.helper';

//const SECRET = process.env["JWT_SECRET_KEY"];

const signToken = async (
  login: string | undefined,
  password: string
): Promise<string | undefined> => {
  const userRepo = getRepository(User);
  const user = await userRepo.findOne({ where: { login: login } });
  if (!user) {
    return undefined;
  } else {
    const { password: hashedPassword } = user;
    const comparisonRes = await checkHashPassword(password, hashedPassword);
    if (comparisonRes) {
      const { id, login } = user;
      const token = jwt.sign({ id, login }, `${process.env['JWT_SECRET_KEY']}`);
      return token;
    } else {
      return undefined;
    }
  }
};

export { signToken };
