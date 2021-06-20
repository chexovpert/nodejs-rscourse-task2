import {Router, Request, Response, NextFunction} from "express"
//import { Task } from "../../entities/task";
import { ITask } from "../../types/types";
import { getAllTaskByBoardIdService, postTaskService, getTaskByBoardIdAndTaskIdService, updateTaskByBoardIdAndTaskIdService, deleteTaskService } from './task.service';
import {RestError} from '../../middleware/middleware'

const router = Router({ mergeParams: true });
router.route('/:boardId/tasks').get(async (req: Request, res: Response) : Promise<void> => {
  const { boardId } = req.params;
  const tasks = await getAllTaskByBoardIdService(boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks').post(async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  const reqBody: ITask = {...req.body}
  const boardId : string | undefined = req.params["boardId"]
  if (boardId !== undefined) {
    const post = await postTaskService(reqBody)
    res.status(201).json(post)
  } else {
    next(RestError.badRequest('board not found'))
    //res.status(404).send('not found')
  }
})



router.route('/:boardId/tasks/:taskId').get(async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  const {boardId, taskId} = req.params;
  
  const task = await getTaskByBoardIdAndTaskIdService(boardId, taskId);
  if (task === undefined) {
    next(RestError.badRequest('board not found'))
    //res.status(404).send('not found')
  } else {
    res.status(200).json((task))
  
  }
  
  
})

router.route('/:boardId/tasks/:taskId').put(async (req: Request, res: Response) : Promise<void> => {
  const {boardId, taskId} = req.params;
  const reqBody: ITask = req.body
  const task = await updateTaskByBoardIdAndTaskIdService(boardId, taskId, reqBody);
  res.json((task))
})

router.route('/:boardId/tasks/:taskId').delete(async (req: Request,res: Response) : Promise<void> => {
  const {boardId, taskId} = req.params;
  await deleteTaskService(boardId, taskId)

  res.status(204).send('deleted');

})

export default router;
