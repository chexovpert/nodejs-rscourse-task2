import { getAll, postUser, getUserById, updateUser, deleteUser } from'./user.memory.repository';
import {User, IReqUser} from "./user.module"

const getAllService = () : Promise<User[]> => getAll();


const getUserByIdService = (id: string | undefined): Promise<User| undefined> => getUserById(id);


const postUserService = (user: User): Promise<User> => postUser(user);

/**
 * Deletes a user by ID service
 * @param {string} id
 * @returns {Promise<void>}
 */
const deleteUserService = (id: string| undefined): Promise<void> => deleteUser(id);


const updateUserService = (id: string | undefined, reqBody: IReqUser) => updateUser(id, reqBody);

export { getAllService, postUserService, getUserByIdService, updateUserService, deleteUserService };
