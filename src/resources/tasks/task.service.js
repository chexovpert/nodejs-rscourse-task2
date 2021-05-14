const taskRepo = require('./task.memory.repository');

const getAllTaskByBoardId = (boardId) => taskRepo.getAllTaskByBoardId(boardId);

module.exports = { getAllTaskByBoardId };
