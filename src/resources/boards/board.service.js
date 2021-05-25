const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const getBoardById = (id) => boardRepo.getBoardById(id);

const postBoard = (board) => boardRepo.postBoard(board);

const deleteBoard = (id) => boardRepo.deleteBoard(id);

const updateBoard = (id, reqBody) => boardRepo.updateBoard(id, reqBody);

module.exports = { getAll, postBoard, getBoardById, deleteBoard, updateBoard };
