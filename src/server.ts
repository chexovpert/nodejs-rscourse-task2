import config from './common/config';
import app from './app';
//console.log(config);

app.listen(config.PORT, () =>
  console.log(`App is running on http://localhost:${config.PORT}`)
);
