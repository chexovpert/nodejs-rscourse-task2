interface IReqUser  {
    name: string,
    login: string,
    password: string,
}

interface Column {
    id: string | undefined;
    title: string;
    order: number;
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

interface IBoard  {
  id?: string,
  title: string,
  columns: string
}
export {IReqUser, Column, ITask, IBoard}