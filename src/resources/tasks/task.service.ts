import { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks } from './task.memory.repository';
import { Task } from "../../entities/task";
import { ITask } from "../../types/types";
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
const postTaskService = (itask: ITask): Promise<Task | undefined>  => postTask(itask);

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
const updateTaskByBoardIdAndTaskIdService = (boardId: string| undefined,taskId: string| undefined, reqBody: ITask): Promise<Task| undefined> => updateTaskByBoardIdAndTaskId(boardId,taskId, reqBody)

/**
 * Deletes task by board id and task id
 * @param {string} boardId id of board to which this task belongs
 * @param {string} taskId task id
 * @returns {Promise<void>}
 */
const deleteTaskService = (boardId: string| undefined, taskId: string| undefined): Promise<"deleted" | "not found"> => deleteTask(boardId, taskId)


export { getAllTasksService, getAllTaskByBoardIdService, postTaskService, getTaskByBoardIdAndTaskIdService, updateTaskByBoardIdAndTaskIdService, deleteTaskService };
