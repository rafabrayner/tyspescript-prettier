import express, {Application} from 'express';
const app: Application = express();
const port = 3000;
import {mainRouter} from './routers/main';

app.use('/', mainRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
