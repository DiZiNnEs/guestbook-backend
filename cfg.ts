import { Credential } from 'firebase-admin/lib/app/credential'
import admin from 'firebase-admin'

require('dotenv').config()

const firebaseCredential: any = {
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url:
        process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
}

const serviceAccount = require('./kindom-of-dizzines-firebase-adminsdk-yy2g6-2b27e47d78.json')
export const firebaseConfig = {
    // TODO: заменить это
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
}

export const allowCors = [
    'http://localhost:3000',
    'http://213.108.4.26:3000',
    'http://213.108.4.26:8000',
    'http://213.108.4.26:8080',
]
