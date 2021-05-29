// const taskServ = require('../tasks/task.service');
// const Board = require('./board.model');
// //const Column = require('../columns/column.model');
// /** @module Board_Memory */

// /**
//  * @typedef reqBody
//  * @property {string} title board title
//  * @property {Column[]} columns board title
//  */
// const BOARDS: Array<Column> = [];
// /**
//  * Returns all boards from in-memory DB
//  * @returns {Promise<Board[]>}
//  */
// const getAll = async () => BOARDS;
// /**
//  * Creates a new board
//  * @param {Board} board
//  * @returns {Promise<Board>}
//  */
// const postBoard = async (board) => {
//   BOARDS.push(board);
//   return board;
// };
// /**
//  * Return board by id
//  * @param {string} id
//  * @returns {Promise<Board>}
//  */
// const getBoardById = async (id) => {
//   const boardById = BOARDS.find((board) => board.id === id);
//   return boardById;
// };
// /**
//  * Updates board by id
//  * @param {string} id board id
//  * @param {reqBody} reqBody updated params
//  * @returns {Promise<Board>} updated board
//  */
// const updateBoard = async (id, reqBody) => {
//   const board = await getBoardById(id);
//   const { title, columns } = reqBody;
//   board.title = title;
//   board.columns = columns;
//   return board;
// };
// /**
//  * Deletes board by id
//  * @param {string} id board id
//  * @returns {Promise<void>}
//  */
// const deleteBoard = async (id) => {
//   const tasks = await taskServ.getAllTaskByBoardId(id);
//   Promise.all(
//     tasks.map(async (task) => {
//       await taskServ.deleteTask(task.boardId, task.id);
//     })
//   );
//   const idNum = BOARDS.findIndex((board) => board.id === id);
//   BOARDS.splice(idNum, 1);
// };

// module.exports = { getAll, postBoard, getBoardById, deleteBoard, updateBoard };
