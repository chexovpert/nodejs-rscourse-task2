const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(200).json(users.map(User.toResponse));
});
router.route('/').post(async (req, res) => {
  const user = new User({ ...req.body });

  const post = await usersService.postUSER(user);
  // console.log(post);

  // map user fields to exclude secret fields like "password"
  res.status(201).json(User.toResponse(post));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserByID(id);
  res.json(User.toResponse(user));
});

module.exports = router;
