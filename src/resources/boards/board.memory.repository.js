const taskRepo = require('../tasks/task.memory.repository')

const BOARDS = [];

const getAll = async () => BOARDS;
const postBoard = async (board) => {
  BOARDS.push(board);
  return board;
};
const getBoardById = async (id) => {
  const boardById = BOARDS.find((board) => board.id === id);
  if (boardById === undefined) {
    return false}
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
  const boardId = BOARDS.findIndex((board) => board.id === id);
  BOARDS.splice(boardId, 1);
  const tasks = await taskRepo.getAllTasks()
  // console.log(tasks, "log1", id);
  tasks.forEach((tsk, ixd, array) => {
    if (tsk.boardId === id) {
      
      array.splice(ixd, 1)
      
    }
    
  })
  // console.log(tasks, "log2");
  return true
};

module.exports = { getAll, postBoard, getBoardById, deleteBoard, updateBoard };
