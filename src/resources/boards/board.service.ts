import boardRepo from './board.memory.repository';
import {Board, IReqBoard} from './board.model';
//import Column from '../columns/column.model';
/** @module Board_Service */
/**
 * @typedef reqBody
 * @property {string} title board title
 * @property {Column[]} columns board title
 */
/**
 * Returns all boards service
 * @returns {Promise<Board[]>}
 */
const getAllService = (): Promise<Board[]> => boardRepo.getAll();
/**
 * Return board by id service
 * @param {string} id board id
 * @returns {Promise<Board>} board
 */
const getBoardByIdService = (id: string| undefined): Promise<Board | undefined> => boardRepo.getBoardById(id);
/**
 * Creates a new board service
 * @param {Board} board
 * @returns {Promise<Board>}
 */
const postBoardService = (board: Board): Promise<Board> => boardRepo.postBoard(board);
/**
 * Deletes board by id service
 * @param {string} id board id
 * @returns {Promise<void>}
 */
const deleteBoardService = (id: string| undefined): Promise<void> => boardRepo.deleteBoard(id);
/**
 * Updates board by id
 * @param {string} id board id
 * @param {reqBody} reqBody updated params
 * @returns {Promise<Board>} updated board
 */
const updateBoardService = (id: string | undefined, reqBody: IReqBoard): Promise<Board | undefined> => boardRepo.updateBoard(id, reqBody);

export default { getAllService, getBoardByIdService, postBoardService, deleteBoardService, updateBoardService };
