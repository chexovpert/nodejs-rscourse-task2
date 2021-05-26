const taskRepo = require('../tasks/task.memory.repository');
// const User = require('./user.model');

/**
 * @typedef reqBody - request body for User
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} password - User login
 */

const USERS = [];
/**
 * Gets all users (remove password from response)
 * @returns {Promise<User[]>} - array of Users
 */
const getAll = async () => 
   USERS
;
/**
 * Gets a user by ID e.g. “/users/123” (remove password from response)
 * @param {string} id - User id
 * @returns {Promise<User>} - User by id
 */
const getUserById = async (id) => {
  const userById = USERS.find((user) => user.id === id);
  return userById;
};
/**
 * Creates a new user (remove password from response)
 * @param {User} user - new User
 * @returns {Promise<User>} - new User
 */
const postUser = async (user) => {
  USERS.push(user);
  return user;
};
/**
 * Deletes user by ID. When somebody DELETE User, all Tasks where User is assignee should be updated to put userId=null
 * @param {string} id - user id
 * @returns {Promise<void>}
 */
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
/**
 * Updates a user by ID
 * @param {string} id 
 * @param {reqBody} reqBody 
 * @returns {Promise<User>}
 */
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
