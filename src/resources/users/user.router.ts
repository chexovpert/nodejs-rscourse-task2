import { Router, Request, Response, NextFunction } from 'express';
import { IReqUser } from '../../types/types';
import {
  getAllService,
  postUserService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from './user.service';
import { RestError } from '../../middleware/middleware';
import { User } from '../../entities/user';
const router = Router();
router.route('/').get(
  async (_req: Request, res: Response): Promise<void> => {
    const users = await getAllService();
    //throw Error('oops')
    res.status(200).json(users.map(User.toResponse));
  }
);
router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const reqBody: IReqUser = { ...req.body };
    const post = await postUserService(reqBody);
    if (post === undefined) {
      res.status(404).send('not found');
    } else res.status(201).json(User.toResponse(post));
  }
);

router.route('/:id').get(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const user = await getUserByIdService(id);
    if (user !== undefined) {
      res.json(User.toResponse(user));
    } else {
      //throw new Error('smthing');
      next(RestError.badRequest('User not found'));
      //next(Error('smthing'))
      //res.status(404).send('User not found')
    }
  }
);

router.route('/:id').put(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const reqBody = req.body;
    const user = await updateUserService(id, reqBody);
    if (user !== undefined) {
      res.json(User.toResponse(user));
    } else {
      next(RestError.badRequest('User not found'));
      //next(Error('smthing'))
      //res.status(404).send('User not found')
    }
  }
);

router.route('/:id').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await deleteUserService(id);
    res.status(204).send('User has been deleted');
  }
);

export default router;
