import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import bucket from "../firebase/firebaseConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import grid from "gridfs-stream";
import mongoose from 'mongoose';

const URL = "http://localhost:8000";

let gfs, gridfsBucket;

const connection = mongoose.connection;

connection.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(connection.db, {
        bucketName: 'fs'
    });
    gfs = grid(connection.db, mongoose.mongo);
    gfs.collection('fs');
})

export function imageUploadController(request, response){
    try {
        // const path = request.file.path;

        // response.status(200).json(path);

        if (!request.file){
            response.status(404).json({message: "File not found."});
        }

        const filename = Date.now() + "-" + request.file.originalname;

        const blob = bucket.file(filename);

        const blobstream = blob.createWriteStream({
            resumable: false,
            metadata: {
                contentType: request.file.mimetype
            }
        });

        blobstream.on("error", (error) => {
            console.log(error);

            response.status(500).json({message: error.message});
        })

        blobstream.on("finish", async () => {
            await blob.makePublic();

            const url = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

            response.status(200).json(url);
        })

        blobstream.end(request.file.buffer);
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}


export async function getImage(request, response){
    try {
        const imageName = request.params.filename;
        const imagePath = path.join(__dirname, '..', 'uploads', imageName);

        if (fs.existsSync(imagePath)){
            const imageBinary = fs.readFileSync(imagePath);
            response.status(200).send(imageBinary);
        }
        else {
            response.status(404).json({message: "Image Not Found."});
        }
    }
    catch (error){
        return response.status(500).json({message : error.message});
    }
}