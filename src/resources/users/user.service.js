const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUserByID = (id) => usersRepo.getUserById(id);

const postUSER = (user) => usersRepo.postUSER(user);

module.exports = { getAll, postUSER, getUserByID };
