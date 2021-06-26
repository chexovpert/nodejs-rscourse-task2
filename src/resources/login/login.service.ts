import {getRepository} from "typeorm"
import {User} from "../../entities/user"
import jwt from 'jsonwebtoken';
import config from '../../common/config';

const {JWT_SECRET_KEY} = config;


const signToken = async(login: string| undefined, password: string | undefined) :Promise<string | undefined>  => {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne({where: {login: login, password: password}})
    if (!user) {return undefined}
    else {
        const {id, login} = user;
        const token = jwt.sign({id, login}, JWT_SECRET_KEY)
        return token;
    }
}

export {signToken}
