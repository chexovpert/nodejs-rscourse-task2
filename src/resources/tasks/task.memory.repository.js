const Task = require("./task.model");
/** @module Task_Memory */
/**
 * @typedef reqBody - request body for User
 * @property {string} title - task title
 * @property {number} order - task order
 * @property {string} description - task description
 * @property {string} userId - id of user who created this task
 * @property {string} boardId - id of board to which this task belongs
 * @property {string} columnId - id of column to which this task belongs
 */
const TASKS = [];
/**
 * Gets all tasks
 * @returns {Promise<Task[]>} task
 */
const getAllTasks = async () => TASKS

/**
 * Gets all tasks by board id
 * @param {string} boardId board id
 * @returns {Promise<Task[]>} task
 */
const getAllTaskByBoardId = async (boardId) => {
  const tasks = TASKS.filter((tsk) => tsk.boardId === boardId)
  return tasks;
};

/**
 * Creates a new task
 * @param {Task} task new task
 * @returns {Promise<Task>} task
 */
const postTask = async (task) => {
  TASKS.push(task);
  return task
}
/**
 * Gets task by board id and task id
 * @param {string} boardId id of board to which this task belongs
 * @param {string} id id of task
 * @returns {Promise<Task>}
 */
const getTaskByBoardIdAndTaskId = async (boardId, id) => {
  const tasks = await getAllTaskByBoardId(boardId);
  const task = tasks.find((tsk) => tsk.id === id)
  if (task === undefined) {
    return false
  }
  return task
}
/**
 * Updates task by board id and task id
 * @param {string} searchBoardId id of board to which this task belongs
 * @param {string} id id of task
 * @param {reqBody} reqBody updated task information
 * @returns {Promise<Task>} updated task
 */
const updateTaskByBoardIdAndTaskId = async (searchBoardId, id, reqBody) => {
  const {title, order, description, userId, boardId, columnId} = reqBody
  const task = await getTaskByBoardIdAndTaskId(searchBoardId, id);
  task.title = title;
  task.order = order;
  task.description = description;
  task.userId = userId;
  task.boardId = boardId;
  task.columnId = columnId;
  return task
}
/**
 * Deletes task by board id and task id
 * @param {string} boardId id of board to which this task belongs
 * @param {string} id task id
 * @returns {Promise<void>}
 */
const deleteTask = async (boardId, id) => {
  const taskId = TASKS.findIndex((tsk)=> tsk.id === id && tsk.boardId ===boardId);
  TASKS.splice(taskId,1)
}

module.exports = { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks };
