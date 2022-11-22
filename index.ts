import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Healthy')
})

app.post('/api/v1/comments', (req: Request, res: Response) => {
    console.log('Do insert in DB')
})

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})