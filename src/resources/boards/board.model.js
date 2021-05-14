const { v4: uuid } = require('uuid');
const Column = require('../columns/column.model');

class Board {
  // columns ?
  constructor({
    id = uuid(),
    title = 'title',
    columns = [new Column({})],
  } = {}) {
    this.id = id;
    this.title = title;
    // this.columns = columns;
    // console.log('fdfd', columns);
    // console.log('fdfd', ...columns);
    // console.log(...columns.map((column) => Column.toResponse(column)));
    // console.log(...columns.map((column) => new Column(column)));
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
