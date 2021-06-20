import { getRepository } from "typeorm";
import { Task } from "../../entities/task";
import { ITask } from "../../types/types";


//const TASKS: Task[] = [];

const getAllTasks = async (): Promise<Task[]> => {
  const taskRepo = getRepository(Task)
  return taskRepo.find({where: {}})
}

const getAllTaskByBoardId = async (boardId: string| undefined): Promise<Task[]> => {
  const taskRepo = getRepository(Task);
  //console.log(await taskRepo.find({where: {}}));
  
  return taskRepo.find({where: {boardId: `${boardId}`}})
  // const tasks = TASKS.filter((tsk) => tsk.boardId === boardId)
  // return tasks;
};

const postTask = async (itask: ITask): Promise<Task | undefined> => {
  const taskRepo = getRepository(Task);
  const newTask = taskRepo.create(itask)
  const savedTask = taskRepo.save(newTask);
  const savedId = (await savedTask).id
  if (savedId) return taskRepo.findOne(savedId)
  return undefined
  // TASKS.push(task);
  // return task
}

const getTaskByBoardIdAndTaskId = async (boardId: string | undefined, id: string | undefined): Promise<Task| undefined> => {
  const taskRepo = getRepository(Task);
  if (boardId === undefined || id === undefined) return undefined
  return taskRepo.findOne({where: {boardId: boardId, id: id}})
  // const tasks = await getAllTaskByBoardId(boardId);
  // const task = tasks.find((tsk) => tsk.id === id)
  // if (task === undefined) {
  //   return undefined
  // }
  // return task
}

const updateTaskByBoardIdAndTaskId = async (searchBoardId: string| undefined, id: string| undefined, reqBody: ITask): Promise<Task| undefined> => {
  const taskRepo = getRepository(Task);
  const res = await taskRepo.findOne({where:{ boardId : searchBoardId, id: id}})
  if (res === undefined || searchBoardId === undefined || id === undefined) return undefined
  const updatedTask = await taskRepo.update({ boardId : searchBoardId, id: id}, reqBody)
  return updatedTask.raw
  // const {title, order, description, userId, boardId, columnId} = reqBody
  // const task = await getTaskByBoardIdAndTaskId(searchBoardId, id);
  // if (task) {
  // task.title = title;
  // task.order = order;
  // task.description = description;
  // task.userId = userId;
  // task.boardId = boardId;
  // task.columnId = columnId;
  // return task
  // } else {
  //     return undefined
  // }
}

const deleteTask = async (boardId: string| undefined, id: string| undefined): Promise<"deleted" | "not found"> => {
  const taskRepo = getRepository(Task);
  const res = await taskRepo.findOne({where:{ boardId : boardId, id: id}})
  if (res === undefined || id === undefined || boardId === undefined) return "not found"
  const deletedTask = await taskRepo.delete({ boardId : boardId, id: id})
  if(deletedTask.affected) return 'deleted'
  return 'not found'
  // const taskId = TASKS.findIndex((tsk)=> tsk.id === id && tsk.boardId ===boardId);
  // TASKS.splice(taskId,1)
}

export { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks };
