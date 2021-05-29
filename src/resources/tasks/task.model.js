const { v4: uuid } = require('uuid');

/**
 * Class to create a task
 * @constructor
 */
class Task {
  /**
   * @property {string} id task id
   * @property {string} title task name
   * @property {number} order task order
   * @property {string} description task description
   * @property {string} userId id of user who created task
   * @property {string} columnId id of column to which this task belongs to
   * @property {string} boardId id of board to which this task belongs to
   */
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

}

module.exports = Task;
