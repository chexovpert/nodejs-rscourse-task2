import { getAll, postUser, getUserById, updateUser } from'./user.memory.repository';
import {User, IReqUser} from "./user.module"

const getAllService = () => getAll();


const getUserByIdService = (id: string | undefined) => getUserById(id);

/**
 * Creates a new user service
 * @param {User} user
 * @returns {Promise<User>}
 */
const postUserService = (user: User) => postUser(user);

/**
 * Deletes a user by ID service
 * @param {string} id
 * @returns {Promise<void>}
 */
//const deleteUserService = (id) => usersRepo.deleteUser(id);


const updateUserService = (id: string, reqBody: IReqUser) => updateUser(id, reqBody);

export { getAllService, postUserService, getUserByIdService, updateUserService };
