import {Router, Request, Response} from "express"
import {User, IReqUser} from './user.module';
import {getAllService,  postUserService, getUserByIdService, updateUserService, deleteUserService } from './user.service';

const router = Router();
router.route('/').get(async (_req: Request, res: Response) : Promise<void> => {
  const users = await getAllService();
  res.status(200).json(users.map(User.toResponse));

});
router.route('/').post(async (req: Request, res: Response) : Promise<void> => {
  const reqBody: IReqUser = {...req.body}
  const user = new User(reqBody);

  const post = await postUserService(user);
  res.status(201).json(User.toResponse(post));
});

router.route('/:id').get(async (req: Request, res: Response) : Promise<void> => {
  const { id } = req.params;
  const user = await getUserByIdService(id);
  if (user !== undefined) {
    res.json(User.toResponse(user));
  } else {
    res.status(404).send('User not found')
  }
});

router.route('/:id').put(async (req, res) : Promise<void> => {
  const {id} = req.params;
  const reqBody = req.body
  const user = await updateUserService(id, reqBody)
  if (user !== undefined) {
    res.json(User.toResponse(user))
  } else {
    res.status(404).send('User not found')
  }
})

router.route('/:id').delete(async (req, res) : Promise<void> => {
  const {id} = req.params;
  await deleteUserService(id);
  res.status(204).send('User has been deleted')

})

export default router;
