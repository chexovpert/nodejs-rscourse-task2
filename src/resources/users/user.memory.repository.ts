import {getRepository} from "typeorm"
//import {getAllTasksService} from '../tasks/task.service';
import {User} from "../../entities/user"
import {IReqUser} from "../../types/types"

//const USERS: User[] = [];

const getAll = async () : Promise<User[]> => { 
  const userRepo = getRepository(User);
  return userRepo.find({where: {}})
};

const getUserById = async (id: string | undefined) : Promise<User| undefined>  => {
  const userRepo = getRepository(User);
  //const userById = USERS.find((user) => user.id === id);
  return userRepo.findOne(id);
};

const postUser = async (reqBody: IReqUser) : Promise<User> => {
  const userRepo = getRepository(User);
  const newUser = userRepo.create(reqBody);
  const savedUser = userRepo.save(newUser);
  return savedUser
  //USERS.push(user);
  //return user;
};

const deleteUser = async (id: string| undefined) : Promise<"deleted" | "not found"> => {
  const userRepo = getRepository(User);
  const res = await userRepo.findOne(id)
  if (res === undefined || id === undefined) return "not found"
  const deletedUser = await userRepo.delete(id)
  if (deletedUser.affected) return "deleted"
  return "not found"
  // const userId = USERS.findIndex((user) => user.id === id);
  // USERS.splice(userId, 1);
  // const tasks = await getAllTasksService();
  //console.log(tasks);
  
  // tasks.forEach((tsk) => {
  //   if (tsk.userId === id) {
  //     //Object.assign(tsk, { userId: null });
  //     tsk.userId = null
  //     //console.log("deleted smhow");
  //   }
  // });
};

const updateUser = async (id: string| undefined, reqBody: IReqUser) : Promise<User| undefined>  => {
  const userRepo = getRepository(User);
  const res = await userRepo.findOne(id)
  if (res === undefined || id === undefined) return undefined
  const updatedUser = await userRepo.update(id, reqBody)
  return updatedUser.raw
  // const { name, login, password } = reqBody;
  // const user = await getUserById(id);
  // if (user) {
  //   user.name = name;
  //   user.login = login;
  //   user.password = password;
  //   return user;
  // } else {
  //   return undefined
  // }
  // userById = {...reqBody}
  
};

export { getAll, postUser, getUserById, updateUser, deleteUser };
