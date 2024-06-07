import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://blog-website-b76c8.appspot.com"
})

const bucket = admin.storage().bucket();

export default bucket;