import { NextFunction, Request, Response } from "express";
import jwt  from "jsonwebtoken";
import config from '../common/config';

const {JWT_SECRET_KEY} = config;

const checkToken = (req: Request, res: Response, next: NextFunction) => {
    const sessionToken = req.header('Authorization');
    console.log(sessionToken);
    if (!sessionToken) return res.status(403).send({ auth: false, message: "No token provided." });
    else {
        const [type, token] = sessionToken.split(' ');
        if (type !== 'Bearer' || token === undefined) {
            res.status(401).send('Unauthorized user!');
        } else {
            try {
            const res = jwt.verify(token, JWT_SECRET_KEY);
            console.log(res);
            } catch(e) {
                return res.status(401).send({ error: `not authorized`})
            }
            return next()
        }
        // const ress = jwt.verify(sessionToken,JWT_SECRET_KEY)
        // console.log(ress);
        // next()
    }
    return res.status(401).send({ error: `not authorized`})
    }


export default checkToken