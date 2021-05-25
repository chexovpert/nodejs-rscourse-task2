const taskRepo = require('./task.memory.repository');

const getAllTaskByBoardId = (boardId) => taskRepo.getAllTaskByBoardId(boardId);

const postTask = (task) => taskRepo.postTask(task);

const getTaskByBoardIdAndTaskId = (boardId,taskId) => taskRepo.getTaskByBoardIdAndTaskId(boardId,taskId)

const updateTaskByBoardIdAndTaskId = (boardId,taskId, reqBody) => taskRepo.updateTaskByBoardIdAndTaskId(boardId,taskId, reqBody)

const deleteTask = (boardId, taskId) => taskRepo.deleteTask(boardId, taskId)


module.exports = { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask };
