const BOARDS = [];

const getAll = async () => BOARDS;
const postBoard = async (board) => {
  BOARDS.push(board);
  return board;
};
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
  const boardId = BOARDS.findIndex((board) => board.id === id);
  BOARDS.splice(boardId, 1);
};

module.exports = { getAll, postBoard, getBoardById, deleteBoard, updateBoard };
