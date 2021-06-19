import config from './common/config';
import app from './app';
import {tryDBConnect} from "./helpers/db"
//console.log(config);
tryDBConnect(() =>{
  app.listen(config.PORT, () =>
    console.log(`App is running on http://localhost:${config.PORT}`)
  );
}
)

