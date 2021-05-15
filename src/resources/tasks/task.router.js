const router = require('express').Router();
const taskService = require('./task.service');
const Task = require('./task.model')

router.route('/:boardId/tasks').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAllTaskByBoardId(boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const {boardId} = req.params
  const task = new Task({...req.body, boardId});
  const post = await taskService.postTask(task)
  res.status(201).json(post)
})



router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const {boardId, taskId} = req.params;
  
  const task = await taskService.getTaskByBoardIdAndTaskId(boardId, taskId);
  // console.log(task);
  if (task === false) {
    res.status(404).send('not found')
  } else {
    res.status(200).json((task))
  
  }
  
  
})

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const {boardId, taskId} = req.params;
  const reqBody = req.body
  const task = await taskService.updateTaskByBoardIdAndTaskId(boardId, taskId, reqBody);
  res.json((task))
})

router.route('/:boardId/tasks/:taskId').delete(async (req,res) => {
  const {boardId, taskId} = req.params;
  await taskService.deleteTask(boardId, taskId)
  // console.log(deletedTask);

  res.status(200).send('smth');

})

module.exports = router;
