import express, {Request, Response} from 'express';

export const mainRouter = express.Router();

mainRouter.get('/', (req: Request, res: Response) => {
  console.log('Hello World!!');
  res.json({
    message: 'New message',
  });
});
