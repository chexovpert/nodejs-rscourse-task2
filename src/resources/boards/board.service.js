const boardRepo = require('./board.memory.repository');
const Board = require('./board.model');
const Column = require('../columns/column.model');
/**
 * @typedef reqBody
 * @property {string} title board title
 * @property {Column[]} columns board title
 */
/**
 * Returns all boards service
 * @returns {Promise<Board[]>}
 */
const getAll = () => boardRepo.getAll();
/**
 * Return board by id service
 * @param {string} id board id
 * @returns {Promise<Board>} board
 */
const getBoardById = (id) => boardRepo.getBoardById(id);
/**
 * Creates a new board service
 * @param {Board} board
 * @returns {Promise<Board>}
 */
const postBoard = (board) => boardRepo.postBoard(board);
/**
 * Deletes board by id service
 * @param {string} id board id
 * @returns {Promise<void>}
 */
const deleteBoard = (id) => boardRepo.deleteBoard(id);
/**
 * Updates board by id
 * @param {string} id board id
 * @param {reqBody} reqBody updated params
 * @returns {Promise<Board>} updated board
 */
const updateBoard = (id, reqBody) => boardRepo.updateBoard(id, reqBody);

module.exports = { getAll, postBoard, getBoardById, deleteBoard, updateBoard };
