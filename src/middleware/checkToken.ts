import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../common/config';

const { JWT_SECRET_KEY } = config;

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const sessionToken = req.headers.authorization;
  if (!sessionToken)
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  else {
    const [type, token] = sessionToken.split(' ');
    if (type !== 'Bearer') {
      res.status(401).send('Unauthorized user!');
    } else {
      try {
        if (token === undefined) return undefined;
        jwt.verify(token, JWT_SECRET_KEY);
        //return next()
      } catch (e) {
        return res.status(409).send({ error: `not authorized` });
      }
      return next();
    }
    // const ress = jwt.verify(sessionToken,JWT_SECRET_KEY)
    // console.log(ress);
    // next()
  }
  return res.status(401).send({ error: `not authorized` });
};

export default checkToken;
