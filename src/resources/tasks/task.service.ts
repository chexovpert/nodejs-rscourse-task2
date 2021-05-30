import { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks } from './task.memory.repository';
import { IReqTask, Task } from "./task.model";
/** @module Task_Service */

/**
 * Gets all tasks service
 * @returns {Promise<Task[]>} task
 */
const getAllTasksService = (): Promise<Task[]> => getAllTasks();

/**
 * Gets all tasks by board id service
 * @param {string} boardId board id
 * @returns {Promise<Task[]>} task
 */
const getAllTaskByBoardIdService = (boardId: string | undefined): Promise<Task[]> => getAllTaskByBoardId(boardId);

/**
 * Creates a new task
 * @param {Task} task new task
 * @returns {Promise<Task>} task
 */
const postTaskService = (task: Task): Promise<Task>  => postTask(task);

/**
 * Gets tasks by board id and task id service
 * @param {string} boardId id of board to which this task belongs
 * @param {string} taskId id of task
 * @returns {Promise<Task>}
 */
const getTaskByBoardIdAndTaskIdService = (boardId: string| undefined,taskId: string| undefined): Promise<Task| undefined> => getTaskByBoardIdAndTaskId(boardId,taskId)

/**
 * Updates task by board id and task id
 * @param {string} boardId id of board to which this task belongs
 * @param {string} taskId id of task
 * @param {IReqTask} reqBody updated task information
 * @returns {Promise<Task>} updated task
 */
const updateTaskByBoardIdAndTaskIdService = (boardId: string| undefined,taskId: string| undefined, reqBody: IReqTask): Promise<Task| undefined> => updateTaskByBoardIdAndTaskId(boardId,taskId, reqBody)

/**
 * Deletes task by board id and task id
 * @param {string} boardId id of board to which this task belongs
 * @param {string} taskId task id
 * @returns {Promise<void>}
 */
const deleteTaskService = (boardId: string| undefined, taskId: string| undefined): Promise<void> => deleteTask(boardId, taskId)


export { getAllTasksService, getAllTaskByBoardIdService, postTaskService, getTaskByBoardIdAndTaskIdService, updateTaskByBoardIdAndTaskIdService, deleteTaskService };
