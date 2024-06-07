import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer';
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.URL;

const storage = new GridFsStorage({
    url: URL,
    options: {useNewUrlParser: true},
    file: (request, file) => {
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
})

export default multer({storage});