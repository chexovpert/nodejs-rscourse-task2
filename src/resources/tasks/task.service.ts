import { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks } from './task.memory.repository';
import { Task } from "../../entities/task";
import { ITask } from "../../types/types";

const getAllTasksService = (): Promise<Task[]> => getAllTasks();

const getAllTaskByBoardIdService = (boardId: string | undefined): Promise<Task[]> => getAllTaskByBoardId(boardId);

const postTaskService = (itask: ITask): Promise<Task | undefined>  => postTask(itask);

const getTaskByBoardIdAndTaskIdService = (boardId: string| undefined,taskId: string| undefined): Promise<Task| undefined> => getTaskByBoardIdAndTaskId(boardId,taskId)

const updateTaskByBoardIdAndTaskIdService = (boardId: string| undefined,taskId: string| undefined, reqBody: ITask): Promise<Task| undefined> => updateTaskByBoardIdAndTaskId(boardId,taskId, reqBody)

const deleteTaskService = (boardId: string| undefined, taskId: string| undefined): Promise<"deleted" | "not found"> => deleteTask(boardId, taskId)


export { getAllTasksService, getAllTaskByBoardIdService, postTaskService, getTaskByBoardIdAndTaskIdService, updateTaskByBoardIdAndTaskIdService, deleteTaskService };
