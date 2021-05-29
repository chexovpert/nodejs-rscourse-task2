import { v4 as uuid } from 'uuid';
class Task {
    constructor({ id = uuid(), title = 'task', order = 0, description = 'task descr', userId = "", columnId = "", boardId = "", } = {}) {
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
