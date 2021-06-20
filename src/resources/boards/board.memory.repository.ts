//import {getAllTaskByBoardIdService, deleteTaskService} from '../tasks/task.service';
import {Board} from '../../entities/board';
import { Task } from '../../entities/task';
import { IBoard } from '../../types/types';
import { getRepository } from 'typeorm';

//const BOARDS: Array<Board> = [];

const getAll = async (): Promise<Board[]> => {
  const boardRepo = getRepository(Board);
  return boardRepo.find({where: {}})
};

const postBoard = async (reqBody: IBoard) : Promise<Board | undefined> => {
  const boardRepo = getRepository(Board);
  const newBoard = boardRepo.create(reqBody);
  const savedBoard = boardRepo.save(newBoard);
  const savedId = (await savedBoard).id
  if (savedId) return boardRepo.findOne(savedId)
  return undefined
  // BOARDS.push(board);
  // return board;
};


const getBoardById = async (id: string| undefined): Promise<Board | undefined> => {
  const boardRepo = getRepository(Board);
  return boardRepo.findOne(id)
  // const boardById = BOARDS.find((board) => board.id === id);
  // return boardById;
};

const updateBoard = async (id: string| undefined, reqBody: IBoard): Promise<Board| undefined> => {
  const boardRepo = getRepository(Board);
  const res = await boardRepo.findOne(id)
  if(res === undefined || id === undefined) return undefined
  const updatedBoard = await boardRepo.update(id, reqBody)
  return updatedBoard.raw
  // const board = await getBoardById(id);
  // const { title, columns } = reqBody;
  // if (board) {
  //   board.title = title;
  //   board.columns = columns;
  //   return board;
  // } else {
  //     return undefined
  // }
};

const deleteBoard = async (id: string | undefined): Promise<"deleted" | "not found"> => {
  const boardRepo = getRepository(Board);
  const res = await boardRepo.findOne(id)
  if (res === undefined || id === undefined) return "not found"
  const deletedUser = await boardRepo.delete(id)
  const taskRepo = getRepository(Task);
  await taskRepo.delete({boardId: id})
  if (deletedUser.affected) return "deleted"
  return "not found"
  // const tasks = await getAllTaskByBoardIdService(id);
  // Promise.all(
  //   tasks.map(async (task: Task) => {
  //     await deleteTaskService(task.boardId, task.id);
  //   })
  // );
  // const idNum = BOARDS.findIndex((board) => board.id === id);
  // BOARDS.splice(idNum, 1);
};

export default  { getAll, postBoard, getBoardById, deleteBoard, updateBoard };
