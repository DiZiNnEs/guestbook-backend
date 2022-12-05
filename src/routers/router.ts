import express from 'express'
import { getComments, writeComments } from '../controllers/api'
import { body } from 'express-validator'

const router = express.Router()

router.route('/comments').post(
    body('username').notEmpty().isString().isLength({ min: 1 }),
    body('comment').notEmpty().isString().isLength({ min: 1 }),

    writeComments
)
router.route('/comments').get(getComments)

export default router
