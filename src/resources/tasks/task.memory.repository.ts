import { IReqTask, Task } from "./task.model";
/** @module Task_Memory */

const TASKS: Task[] = [];
/**
 * Gets all tasks
 * @returns {Promise<Task[]>} task
 */
const getAllTasks = async (): Promise<Task[]> => TASKS

/**
 * Gets all tasks by board id
 * @param {string} boardId board id
 * @returns {Promise<Task[]>} task
 */
const getAllTaskByBoardId = async (boardId: string| undefined): Promise<Task[]> => {
  const tasks = TASKS.filter((tsk) => tsk.boardId === boardId)
  return tasks;
};

/**
 * Creates a new task
 * @param {Task} task new task
 * @returns {Promise<Task>} task
 */
const postTask = async (task: Task): Promise<Task> => {
  TASKS.push(task);
  return task
}
/**
 * Gets task by board id and task id
 * @param {string} boardId id of board to which this task belongs
 * @param {string} id id of task
 * @returns {Promise<Task>}
 */
const getTaskByBoardIdAndTaskId = async (boardId: string | undefined, id: string | undefined): Promise<Task| undefined> => {
  const tasks = await getAllTaskByBoardId(boardId);
  const task = tasks.find((tsk) => tsk.id === id)
  if (task === undefined) {
    return undefined
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
const updateTaskByBoardIdAndTaskId = async (searchBoardId: string| undefined, id: string| undefined, reqBody: IReqTask): Promise<Task| undefined> => {
  const {title, order, description, userId, boardId, columnId} = reqBody
  const task = await getTaskByBoardIdAndTaskId(searchBoardId, id);
  if (task) {
  task.title = title;
  task.order = order;
  task.description = description;
  task.userId = userId;
  task.boardId = boardId;
  task.columnId = columnId;
  return task
  } else {
      return undefined
  }
}
/**
 * Deletes task by board id and task id
 * @param {string} boardId id of board to which this task belongs
 * @param {string} id task id
 * @returns {Promise<void>}
 */
const deleteTask = async (boardId: string| undefined, id: string| undefined): Promise<void> => {
  const taskId = TASKS.findIndex((tsk)=> tsk.id === id && tsk.boardId ===boardId);
  TASKS.splice(taskId,1)
}

export { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks };
