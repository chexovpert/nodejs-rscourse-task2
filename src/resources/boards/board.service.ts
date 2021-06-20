import boardRepo from './board.memory.repository';
import {Board} from '../../entities/board';
import { IBoard } from '../../types/types';

const getAllService = (): Promise<Board[]> => boardRepo.getAll();

const getBoardByIdService = (id: string| undefined): Promise<Board | undefined> => boardRepo.getBoardById(id);

const postBoardService = (reqBody: IBoard): Promise<Board| undefined> => boardRepo.postBoard(reqBody);

const deleteBoardService = (id: string| undefined): Promise<"deleted" | "not found"> => boardRepo.deleteBoard(id);

const updateBoardService = (id: string | undefined, reqBody: IBoard): Promise<Board | undefined> => boardRepo.updateBoard(id, reqBody);

export default { getAllService, getBoardByIdService, postBoardService, deleteBoardService, updateBoardService };
