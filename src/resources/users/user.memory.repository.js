const taskRepo = require('../tasks/task.memory.repository')

const USERS = [];

const getAll = async () => 
   USERS
;
const getUserById = async (id) => {
  const userById = USERS.find((user) => user.id === id);
  return userById;
};
const postUser = async (user) => {
  USERS.push(user);
  return user;
};

const deleteUser = async(id) => {
  const userId = USERS.findIndex((user) => user.id === id);
  USERS.splice(userId, 1)
  const tasks = await taskRepo.getAllTasks();
  tasks.forEach((tsk) => {
    if (tsk.userId === id) {
      Object.assign(tsk, {userId: null })
      // tsk.userId = null
    }
    
  })
  
}

const updateUser = async (id, reqBody) => {
  const {name, login, password} = reqBody
  const user = await getUserById(id)
  user.name = name;
  user.login = login;
  user.password = password
  // userById = {...reqBody}
  return user;
}

module.exports = { getAll, postUser, getUserById, deleteUser, updateUser };
