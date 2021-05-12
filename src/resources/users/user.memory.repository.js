const USERS = [];

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   USERS
;
const getUserById = async (id) => {
  const userById = USERS.find((user) => user.id === id);
  return userById;
};
const postUSER = async (user) => {
  // const users = await user;
  USERS.push(user);
  console.log(USERS);
  return user;
};

module.exports = { getAll, postUSER, getUserById };
