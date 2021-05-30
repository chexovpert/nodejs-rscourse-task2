import { v4 as uuid } from 'uuid';
import Column from '../columns/column.module';
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

 interface IReqBoard  {
  id?: string,
  title: string,
  columns: Column[]
}
class Board implements IReqBoard {
  id: string;
  title: string;
  columns: Column[]
  constructor({ id = uuid(), title = 'title', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    const columnList = columns.map((col) => new Column(col));
    this.columns = columnList;
  }

  /**
   * Return board params
   * @property {Function} toResponse
   * @param {Board} board
   * @returns {resBody}
   */
  static toResponse(board: Board) : Board {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export {Board, IReqBoard};
