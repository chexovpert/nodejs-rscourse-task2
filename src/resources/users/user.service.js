const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUserById = (id) => usersRepo.getUserById(id);

const postUser = (user) => usersRepo.postUser(user);

const deleteUser = (id) => usersRepo.deleteUser(id);

const updateUser = (id, reqBody) => usersRepo.updateUser(id, reqBody);

module.exports = { getAll, postUser, getUserById, deleteUser, updateUser  };
