const router = require('express').Router();
const taskService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAllTaskByBoardId(boardId);
  res.json(tasks);
});

module.exports = router;
