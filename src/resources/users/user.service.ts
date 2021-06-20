import { getAll, postUser, getUserById, updateUser, deleteUser } from'./user.memory.repository';
import {User} from "../../entities/user"
import {IReqUser} from "../../types/types"

const getAllService = () : Promise<User[]> => getAll();

const getUserByIdService = (id: string | undefined): Promise<User| undefined> => getUserById(id);

const postUserService = (reqBody: IReqUser): Promise<User | undefined> => postUser(reqBody);

const deleteUserService = (id: string| undefined): Promise<"deleted" | "not found"> => deleteUser(id);

const updateUserService = (id: string | undefined, reqBody: IReqUser) => updateUser(id, reqBody);

export { getAllService, postUserService, getUserByIdService, updateUserService, deleteUserService };
