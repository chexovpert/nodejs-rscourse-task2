const TASKS = [];

const getAllTasks = async () => TASKS

const getAllTaskByBoardId = async (boardId) => {
  const tasks = TASKS.filter((tsk) => tsk.boardId === boardId)
  return tasks;
};

const postTask = async (task) => {
  TASKS.push(task);
  return task
}

const getTaskByBoardIdAndTaskId = async (boardId, id) => {
  const tasks = await getAllTaskByBoardId(boardId);
  const task = tasks.find((tsk) => tsk.id === id)
  if (task === undefined) {
    return false
  }
  return task
}

const updateTaskByBoardIdAndTaskId = async (searchBoardId, id, reqBody) => {
  const {title, order, description, userId, boardId, columnId} = reqBody
  const task = await getTaskByBoardIdAndTaskId(searchBoardId, id);
  task.title = title;
  task.order = order;
  task.description = description;
  task.userId = userId;
  task.boardId = boardId;
  task.columnId = columnId;
  return task
}

const deleteTask = async (boardId, id) => {
  const taskId = TASKS.findIndex((tsk)=> tsk.id === id && tsk.boardId ===boardId);
  TASKS.splice(taskId,1)
}

module.exports = { getAllTaskByBoardId, postTask, getTaskByBoardIdAndTaskId, updateTaskByBoardIdAndTaskId, deleteTask, getAllTasks };
