const boardRepo = require('../boards/board.memory.repository');

const getAllTaskByBoardId = async (boardId) => {
  const { columns } = await boardRepo.getBoardById(boardId);
  console.log(columns, 'log1');
  return columns;
};

module.exports = { getAllTaskByBoardId };
