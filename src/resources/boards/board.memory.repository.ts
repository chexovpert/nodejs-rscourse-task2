import {Board} from '../../entities/board';
import { Task } from '../../entities/task';
import { IBoard } from '../../types/types';
import { getRepository } from 'typeorm';


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
};


const getBoardById = async (id: string| undefined): Promise<Board | undefined> => {
  const boardRepo = getRepository(Board);
  return boardRepo.findOne(id)
};

const updateBoard = async (id: string| undefined, reqBody: IBoard): Promise<Board| undefined> => {
  const boardRepo = getRepository(Board);
  const res = await boardRepo.findOne(id)
  if(res === undefined || id === undefined) return undefined
  const updatedBoard = await boardRepo.update(id, reqBody)
  return updatedBoard.raw
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
};

export default  { getAll, postBoard, getBoardById, deleteBoard, updateBoard };
