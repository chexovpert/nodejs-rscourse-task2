import { getRepository } from "typeorm";
import { Task } from "../../entities/task";
import { ITask } from "../../types/types";

const getAllTasks = async (): Promise<Task[]> => {
  const taskRepo = getRepository(Task)
  return taskRepo.find({where: {}})
}

const getAllTaskByBoardId = async (boardId: string| undefined): Promise<Task[]> => {
  const taskRepo = getRepository(Task);
  return taskRepo.find({where: {boardId: `${boardId}`}})
};

const postTask = async (itask: ITask): Promise<Task | undefined> => {
  const taskRepo = getRepository(Task);
  const newTask = taskRepo.create(itask)
  const savedTask = taskRepo.save(newTask);
  const savedId = (await savedTask).id
  if (savedId) return taskRepo.findOne(savedId)
  return undefined
}

const getTaskByBoardIdAndTaskId = async (boardId: string | undefined, id: string | undefined): Promise<Task| undefined> => {
  const taskRepo = getRepository(Task);
  if (boardId === undefined || id === undefined) return undefined
  return taskRepo.findOne({where: {boardId: boardId, id: id}})
}

const updateTaskByBoardIdAndTaskId = async (searchBoardId: string| undefined, id: string| undefined, reqBody: ITask): Promise<Task| undefined> => {
  const taskRepo = getRepository(Task);
  const res = await taskRepo.findOne({where:{ boardId : searchBoardId, id: id}})
  if (res === undefined || searchBoardId === undefined || id === undefined) return undefined
  const updatedTask = await taskRepo.update({ boardId : searchBoardId, id: id}, reqBody)
  return updatedTask.raw
}

const deleteTask = async (boardId: string| undefined, id: string| undefined): Promise<"deleted" | "not found"> => {
  const taskRepo = getRepository(Task);
  const res = await taskRepo.findOne({where:{ boardId : boardId, id: id}})
  if (res === undefined || id === undefined || boardId === undefined) return "not found"
  const deletedTask = await taskRepo.delete({ boardId : boardId, id: id})
  if(deletedTask.affected) return 'deleted'
  return 'not found'
}

export { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks };
