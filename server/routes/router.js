import express from "express";
import multer from "multer";

import signupController from "../controllers/signupController.js";
import loginController from "../controllers/loginController.js";
import createBlogController from "../controllers/createBlogController.js";
import { getBlogsController, getPublicBlogsController } from "../controllers/getBlogsController.js";
import { imageUploadController, getImage } from "../controllers/imageController.js";
import editBlogController from "../controllers/editBlogController.js";
import deleteBlogController from "../controllers/deleteBlogController.js";
import { addComment, getComments, updateComment, deleteComment } from "../controllers/commentsController.js";
import userAuth from "../middleware/auth.js";

const router = express.Router();

const upload = multer({dest: "uploads/"});

router.get('/', (request, response) => {
    response.send("Hello from server")
});

// Routes related to login/signup.
router.post('/signup', signupController);
router.post('/login', loginController);

// Routes related to blogs.
router.post('/create-blog', userAuth, createBlogController);
router.get('/getBlogs', userAuth, getBlogsController);
router.get('/get-public-blogs', userAuth, getPublicBlogsController);
router.put('/edit-blog', userAuth, editBlogController);
router.delete('/delete-blog/:id', userAuth, deleteBlogController);

// Routes related to images.
router.post('/upload', upload.single('file'), imageUploadController);
router.get('/uploads/:filename', getImage);

// Routes related to comments.
router.post('/add-comment', addComment);
router.get('/get-comments/:blogId', getComments);
router.put('/edit-comment/:commentId', updateComment);
router.delete('/delete-comment/:commentId', deleteComment);

export default router;