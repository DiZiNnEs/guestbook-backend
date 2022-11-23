import admin from 'firebase-admin'
import {IComments} from "./interfaces";
import {firebaseConfig} from "../cfg";


const firebaseApp = admin.initializeApp(firebaseConfig)

export async function writeComments(body: any): Promise<void> {
    await firebaseApp.database().ref('comments/').push({
        username: body.username,
        text: body.comments
    })
}

export async function getComments(): Promise<IComments[]> {
    const commentsRef = firebaseApp.database().ref('comments/')
    const comments = (await commentsRef.once('value')).val()
    return Object.values(comments)
}
