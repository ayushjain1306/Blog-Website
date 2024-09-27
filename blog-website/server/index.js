import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
import bodyParser from 'body-parser';
import connectionWithDatabase from "./database/db.js";

const app = express();

app.use(cors({
    origin: "https://blo-web.vercel.app",
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}));

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

connectionWithDatabase();

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log("Server connected successfully at PORT 8000.");
})