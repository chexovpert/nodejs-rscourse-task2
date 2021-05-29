const { v4: uuid } = require('uuid');
/**
 * Class to create a column
 * @constructor
 */
class Column {
  /**
   * @property {String} id User id
   * @property {String} title User name
   * @property {number} order User login
   */
  constructor({ id = uuid(), title = 'base title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
