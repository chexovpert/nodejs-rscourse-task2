const taskRepo = require('../tasks/task.memory.repository')

const BOARDS = [];
/**
 * Returns all boards from in-memory DB
 * @returns {Promise<Array>}
 */
const getAll = async () => BOARDS;
/**
 * Creates a new user
 * @param {Object} board 
 * @param {string} board.name 
 * @param {string} board.login 
 * @param {string} board.password 
 * @returns {Promise<Board>}
 */
const postBoard = async (board) => {
  BOARDS.push(board);
  return board;
};
/**
 * Creates a new user
 * @param {string} id 
 * @returns {Promise<Board[] | {}>}
 */
const getBoardById = async (id) => {
  const boardById = BOARDS.find((board) => board.id === id);
  return boardById;
};

const updateBoard = async (id, reqBody) => {
  const board = await getBoardById(id);
  const { title, columns } = reqBody;
  board.title = title;
  board.columns = columns;
  return board;
};

const deleteBoard = async (id) => {
  const tasks = await taskRepo.getAllTaskByBoardId(id)
  Promise.all(tasks.map(async (task) =>{
    await taskRepo.deleteTask(task.boardId, task.id)
}))
const idNum = BOARDS.findIndex((board)=>board.id === id)
BOARDS.splice(idNum, 1)
};

module.exports = { getAll, postBoard, getBoardById, deleteBoard, updateBoard };
