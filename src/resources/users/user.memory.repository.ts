import {getAllTasksService} from '../tasks/task.service';
import {User, IReqUser} from "./user.module"

const USERS: User[] = [];

const getAll = async () : Promise<User[]> => USERS;

const getUserById = async (id: string | undefined) : Promise<User| undefined>  => {
  const userById = USERS.find((user) => user.id === id);
  return userById;
};

const postUser = async (user: User) : Promise<User> => {
  USERS.push(user);
  return user;
};

const deleteUser = async (id: string| undefined) : Promise<void> => {
  const userId = USERS.findIndex((user) => user.id === id);
  USERS.splice(userId, 1);
  const tasks = await getAllTasksService();
  //console.log(tasks);
  
  tasks.forEach((tsk) => {
    if (tsk.userId === id) {
      //Object.assign(tsk, { userId: null });
      tsk.userId = null
      //console.log("deleted smhow");
    }
  });
};

const updateUser = async (id: string| undefined, reqBody: IReqUser) : Promise<User| undefined>  => {
  const { name, login, password } = reqBody;
  const user = await getUserById(id);
  if (user) {
    user.name = name;
    user.login = login;
    user.password = password;
    return user;
  } else {
    return undefined
  }
  // userById = {...reqBody}
  
};

export { getAll, postUser, getUserById, updateUser, deleteUser };
