const { v4: uuid } = require('uuid');
const Column = require('../columns/column.model');

class Board {
  constructor({
    id = uuid(),
    title = 'title',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    const column = [...columns];
    const columnList = column.map((col) => new Column(col));
    this.columns = columnList;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
