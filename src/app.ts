import express from 'express'
import swaggerUI from 'swagger-ui-express'
import path from 'path';
import * as YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import taskRouter from './resources/tasks/task.router';
import boardRouter from './resources/boards/board.router';
import * as middleware from './middleware/middleware';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));


app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(middleware.requestHandler);


app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/', taskRouter);

app.use(middleware.errorHandler);

export default app;
