const usersRepo = require('./user.memory.repository');
// const User = require('./user.model');
/** @module User_Service */

/**
 * User
 * @typedef {Object} User
 * @property {string} id - User ID
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} password - User login
 */

/**
 * Request body for user
 * @typedef reqBody -
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} password - User login
 */

/**
 * Gets all users service
 * @returns {Promise<User[]>}
 */
const getAll = () => usersRepo.getAll();

/**
 * Gets a user by ID service
 * @param {string} id
 * @returns {Promise<User>}
 */
const getUserById = (id) => usersRepo.getUserById(id);

/**
 * Creates a new user service
 * @param {User} user
 * @returns {Promise<User>}
 */
const postUser = (user) => usersRepo.postUser(user);

/**
 * Deletes a user by ID service
 * @param {string} id
 * @returns {Promise<void>}
 */
const deleteUser = (id) => usersRepo.deleteUser(id);

/**
 * Updates a user by ID service
 * @param {string} id
 * @param {reqBody} reqBody
 * @returns {Promise<User>}
 */
const updateUser = (id, reqBody) => usersRepo.updateUser(id, reqBody);

module.exports = { getAll, postUser, getUserById, deleteUser, updateUser };
