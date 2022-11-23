import admin from 'firebase-admin'
import {IComments} from "./interfaces";

const serviceAccount = require("../kindom-of-dizzines-firebase-adminsdk-yy2g6-2b27e47d78.json");
const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://kindom-of-dizzines-default-rtdb.firebaseio.com'
};

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
