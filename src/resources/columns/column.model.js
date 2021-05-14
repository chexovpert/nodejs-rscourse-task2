const { v4: uuid } = require('uuid');

class Column {
  constructor({ id = uuid(), title = 'base title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(columns) {
    const { id, title, order } = columns;
    return { id, title, order };
  }
}

module.exports = Column;
