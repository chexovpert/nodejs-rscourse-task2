// const boardRepo = require('../boards/board.memory.repository');

const TASKS = [];

const getAllTasks = async () => TASKS

const getAllTaskByBoardId = async (boardId) => {
  const tasks = TASKS.filter((tsk) => tsk.boardId === boardId)
  // const { columns } = await boardRepo.getBoardById(boardId);
  // console.log(tasks, 'log1');
  
  return tasks;
};

const postTask = async (task) => {
  TASKS.push(task);
  // console.log(task, 'llllog');
  return task
}

const getTaskByBoardIdAndTaskId = async (boardId, id) => {
  const tasks = await getAllTaskByBoardId(boardId);
  // console.log(tasks);
  const task = tasks.find((tsk) => tsk.id === id)
  // console.log(task);
  if (task === undefined) {
    // const tassk = task.findIndex((tsk) => tsk.id === id)
    // console.log(tassk);
    return false
  }
  return task
}

const updateTaskByBoardIdAndTaskId = async (searchBoardId, id, reqBody) => {
  const {title, order, description, userId, boardId, columnId} = reqBody
  const task = await getTaskByBoardIdAndTaskId(searchBoardId, id);
  task.title = title;
  this.order = order;
  task.description = description;
  task.userId = userId;
  task.boardId = boardId;
  task.columnId = columnId;
  return task
}

const deleteTask = async (boardId, id) => {
  // const tasks = getAllTaskByBoardId
  const taskId = TASKS.findIndex((tsk)=> tsk.id === id && tsk.boardId ===boardId);
  // console.log(taskId, boardId, id);
  // console.log(TASKS);
  TASKS.splice(taskId,1)
  // console.log(TASKS);
}

module.exports = { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks };
