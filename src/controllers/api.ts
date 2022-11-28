import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { ICommentsPost } from '../interfaces'

import { getUsersComments, writeUserComments } from '../services/firebase'

export async function getComments(req: Request, res: Response) {
    try {
        const comments = await getUsersComments()
        return res.status(200).json(comments)
    } catch (e) {
        return res.status(500)
    }
}

export async function writeComments(req: Request, res: Response) {
    try {
        const validationErrors = validationResult(req)

        if (!validationErrors.isEmpty())
            return res.status(400).json({ errors: validationErrors.array() })

        const body: ICommentsPost = req.body

        await writeUserComments(body)
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(500)
    }
}
