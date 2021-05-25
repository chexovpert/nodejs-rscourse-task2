const { v4: uuid } = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'task',
    order = 0,
    description = 'task descr',
    userId = null,
    columnId = null,
    boardId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.columnId = columnId;
    this.boardId = boardId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId } = task;
    return { id, title, order, description, userId };
  }
}

module.exports = Task;
