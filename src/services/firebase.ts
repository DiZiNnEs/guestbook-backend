import admin from 'firebase-admin'
import { IComments } from '../interfaces'
import { firebaseConfig } from '../../cfg'

const firebaseApp = admin.initializeApp(firebaseConfig)

export async function writeUserComments(body: any): Promise<void> {
    await firebaseApp.database().ref('comments/').push({
        username: body.username,
        text: body.comments,
        createdAt: Date.now(),
    })
}

export async function getUsersComments(): Promise<IComments[]> {
    const commentsRef = firebaseApp.database().ref('comments/')
    const data = (await commentsRef.once('value')).val()
    const comments: IComments[] = Object.values(data)
    return comments.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}
