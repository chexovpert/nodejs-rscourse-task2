import {getRepository} from "typeorm"
import { Task } from "../../entities/task";
import {User} from "../../entities/user"
import {IReqUser} from "../../types/types"

const getAll = async () : Promise<User[]> => { 
  const userRepo = getRepository(User);
  return userRepo.find({where: {}})
};

const getUserById = async (id: string | undefined) : Promise<User| undefined>  => {
  const userRepo = getRepository(User);
  return userRepo.findOne(id);
};

const postUser = async (reqBody: IReqUser) : Promise<User | undefined> => {
  const userRepo = getRepository(User);
  const newUser = userRepo.create(reqBody);
  const savedUser = userRepo.save(newUser);
  const savedId = (await savedUser).id
  if (savedId) return userRepo.findOne(savedId)
  return undefined
};

const deleteUser = async (id: string| undefined) : Promise<"deleted" | "not found"> => {
  const userRepo = getRepository(User);
  const res = await userRepo.findOne(id)
  if (res === undefined || id === undefined) return "not found"
  const taskRepo = getRepository(Task);
  await taskRepo.update({userId: id}, {userId: null })
  const deletedUser = await userRepo.delete(id)
  if (deletedUser.affected) return "deleted"
  return "not found"
};

const updateUser = async (id: string| undefined, reqBody: IReqUser) : Promise<User| undefined>  => {
  const userRepo = getRepository(User);
  const res = await userRepo.findOne(id)
  if (res === undefined || id === undefined) return undefined
  const updatedUser = await userRepo.update(id, reqBody)
  return updatedUser.raw
};

export { getAll, postUser, getUserById, updateUser, deleteUser };
