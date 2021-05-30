import {getAllTaskByBoardIdService, deleteTaskService} from '../tasks/task.service';
import {Board, IReqBoard} from './board.model';
import { Task } from '../tasks/task.model';
/** @module Board_Memory */

/**
 * @typedef reqBody
 * @property {string} title board title
 * @property {Column[]} columns board title
 */
const BOARDS: Array<Board> = [];
/**
 * Returns all boards from in-memory DB
 * @returns {Promise<Board[]>}
 */
const getAll = async (): Promise<Board[]> => BOARDS;
/**
 * Creates a new board
 * @param {Board} board
 * @returns {Promise<Board>}
 */
const postBoard = async (board: Board) : Promise<Board> => {
  BOARDS.push(board);
  return board;
};
/**
 * Return board by id
 * @param {string} id
 * @returns {Promise<Board>}
 */
const getBoardById = async (id: string| undefined): Promise<Board | undefined> => {
  const boardById = BOARDS.find((board) => board.id === id);
  return boardById;
};
/**
 * Updates board by id
 * @param {string} id board id
 * @param {reqBody} reqBody updated params
 * @returns {Promise<Board>} updated board
 */
const updateBoard = async (id: string| undefined, reqBody: IReqBoard): Promise<Board| undefined> => {
  const board = await getBoardById(id);
  const { title, columns } = reqBody;
  if (board) {
    board.title = title;
    board.columns = columns;
    return board;
  } else {
      return undefined
  }
};
/**
 * Deletes board by id
 * @param {string} id board id
 * @returns {Promise<void>}
 */
const deleteBoard = async (id: string | undefined): Promise<void> => {
  const tasks = await getAllTaskByBoardIdService(id);
  Promise.all(
    tasks.map(async (task: Task) => {
      await deleteTaskService(task.boardId, task.id);
    })
  );
  const idNum = BOARDS.findIndex((board) => board.id === id);
  BOARDS.splice(idNum, 1);
};

export default  { getAll, postBoard, getBoardById, deleteBoard, updateBoard };
