const taskRepo = require('./task.memory.repository');
/** @module Task_Service */

/**
 * Gets all tasks service
 * @returns {Promise<Task[]>} task
 */
const getAllTasks = () => taskRepo.getAllTasks();

/**
 * Gets all tasks by board id service
 * @param {string} boardId board id
 * @returns {Promise<Task[]>} task
 */
const getAllTaskByBoardId = (boardId) => taskRepo.getAllTaskByBoardId(boardId);

/**
 * Creates a new task
 * @param {Task} task new task
 * @returns {Promise<Task>} task
 */
const postTask = (task) => taskRepo.postTask(task);

/**
 * Gets tasks by board id and task id service
 * @param {string} boardId id of board to which this task belongs
 * @param {string} taskId id of task
 * @returns {Promise<Task>}
 */
const getTaskByBoardIdAndTaskId = (boardId,taskId) => taskRepo.getTaskByBoardIdAndTaskId(boardId,taskId)

/**
 * Updates task by board id and task id
 * @param {string} searchBoardId id of board to which this task belongs
 * @param {string} id id of task
 * @param {reqBody} reqBody updated task information
 * @returns {Promise<Task>} updated task
 */
const updateTaskByBoardIdAndTaskId = (boardId,taskId, reqBody) => taskRepo.updateTaskByBoardIdAndTaskId(boardId,taskId, reqBody)

/**
 * Deletes task by board id and task id
 * @param {string} boardId id of board to which this task belongs
 * @param {string} id task id
 * @returns {Promise<void>}
 */
const deleteTask = (boardId, taskId) => taskRepo.deleteTask(boardId, taskId)


module.exports = { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks };
