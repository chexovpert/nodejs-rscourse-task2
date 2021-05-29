const { v4: uuid } = require('uuid');
/**
 * @typedef resBody - response body for User
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} id - User id
 */

/**
 * Class to create a user
 * @constructor
 */
class User {
  /**
   * @property {string} id User id
   * @property {string} name User name
   * @property {string} login User login
   * @property {string} password User password
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Return user without password
   * @property {Function} toResponse
   * @param {User} user
   * @returns {resBody}
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
