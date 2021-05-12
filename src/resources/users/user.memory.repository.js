const USERS = [];

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   USERS
;
const getUserById = async (id) => {
  const userById = USERS.find((user) => user.id === id);
  return userById;
};
const postUser = async (user) => {
  // const users = await user;
  USERS.push(user);
  // console.log(USERS);
  return user;
};

const deleteUser = async(id) => {
  console.log(id);
  const userId = USERS.findIndex((user) => user.id === id);
  USERS.splice(userId, 1)
  console.log(USERS);
  
}

// const updateUser = async (id, reqBody) => {
//   const userById = USERS.find((user) => user.id === id);
//   console.log(userById);
//   console.log(reqBody);
//   //userById = {...reqBody}
//   return userById;
// }

module.exports = { getAll, postUser, getUserById, deleteUser };
