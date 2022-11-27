import express, {Application, Request, Response} from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import {getComments, writeComments} from './services/firebase';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: ['http://localhost:3000', '*']}))

// TODO: убрать на роутеры, хэндлеры и т.д
app.get('/api/v1/comments', async (req: Request, res: Response) => {
    const comments = await getComments()
    return res.json(comments)
})

app.post('/api/v1/comments', async (req: Request, res: Response) => {
    const body = req.body
    await writeComments(body)
    res.send(200)
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})