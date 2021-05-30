import {Router, Request, Response} from "express";
import {Board} from './board.model';
import boardsService from'./board.service';

const router = Router();
router.route('/').get(async (_req: Request, res: Response) : Promise<void> => {
  const boards = await boardsService.getAllService();
  res.status(200).json(boards.map(Board.toResponse));
});

router.route('/').post(async (req: Request, res: Response) : Promise<void> => {
  const board = new Board({ ...req.body });
  const post = await boardsService.postBoardService(board);
  res.status(201).json(Board.toResponse(post));
});

router.route('/:id').get(async (req: Request, res: Response) : Promise<void> => {
  const { id } = req.params;
  const boardById = await boardsService.getBoardByIdService(id);
  if (boardById === undefined) {
    res.status(404).send('not found')
  } else {
    res.status(200).json((boardById))
  
  }
});

router.route('/:id').put(async (req: Request, res: Response) : Promise<void> => {
  const { id } = req.params;
  const reqBody = req.body;
  const board = await boardsService.updateBoardService(id, reqBody);
  if (board) {
    res.json(Board.toResponse(board));
  }
  else {
    res.status(404).send('not found')
  }
});

router.route('/:id').delete(async (req: Request, res: Response) : Promise<void> => {
  const { id } = req.params;
  
  await boardsService.deleteBoardService(id);
  res.send('Board has been deleted');
});

export default router;
