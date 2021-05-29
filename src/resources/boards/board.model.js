const { v4: uuid } = require('uuid');
const Column = require('../columns/column.model');
/**
 * @typedef resBody - response body for Board
 * @property {string} id - board id
 * @property {string} title - board title
 * @property {Column[]} columns - board columns
 */
/**
 * Class to create a board
 * @constructor
 */
class Board {
  /**
   * @property {string} id board id
   * @property {String} title board name
   * @property {Column[]} columns board login
   */
  constructor({ id = uuid(), title = 'title', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    const column = [...columns];
    const columnList = column.map((col) => new Column(col));
    this.columns = columnList;
  }

  /**
   * Return board params
   * @property {Function} toResponse
   * @param {Board} board
   * @returns {resBody}
   */
  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
