import { v4 as uuid } from 'uuid';

interface IReqTask  {
  id?: string,
  title: string,
  order: number,
  description: string,
  userId: string | null,
  columnId: string,
  boardId: string | undefined,
}
interface ITask  {
  id?: string,
  title: string,
  order: number,
  description: string,
  userId: string | null,
  columnId: string,
  boardId: string | undefined,
}
class Task implements IReqTask {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    columnId: string;
    boardId: string | undefined;
  constructor({
    id = uuid(),
    title = 'task',
    order = 0,
    description = 'task descr',
    userId = null,
    columnId = "1",
    boardId = "",
  } = {} as IReqTask) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.columnId = columnId;
    this.boardId = boardId;
  }

}

export  {Task, IReqTask, ITask};
