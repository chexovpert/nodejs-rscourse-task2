const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  console.log(boards);
  res.status(200).json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const board = new Board({ ...req.body });
  const post = await boardsService.postBoard(board);
  res.status(201).json(Board.toResponse(post));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const boardById = await boardsService.getBoardById(id);
  res.json(Board.toResponse(boardById));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const reqBody = req.body;
  const board = await boardsService.updateBoard(id, reqBody);
  res.json(Board.toResponse(board));
});

// router.route('/:id').delete(async (req, res) => {
//   const { id } = req.params;

//   await boardsService.deleteBoard(id);
//   res.send('Board has been deleted');
// });

module.exports = router;
