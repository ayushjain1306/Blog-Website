import express from "express";
import multer from "multer";
import signupController from "../controllers/signupController.js";
import loginController from "../controllers/loginController.js";
import accountDetailsController from "../controllers/accountDetailsController.js";
import createBlogController from "../controllers/createBlogController.js";
import { getBlogsController, getPublicBlogsController, getParticularBlogController } from "../controllers/getBlogsController.js";
import { imageUploadController, getImage } from "../controllers/imageController.js";
import editBlogController from "../controllers/editBlogController.js";
import deleteBlogController from "../controllers/deleteBlogController.js";
import { addComment, getComments, updateComment, deleteComment } from "../controllers/commentsController.js";
import addDescriptionController from "../controllers/addDescriptionControlller.js";
import userAuth from "../middleware/auth.js";

const router = express.Router();

const upload = multer({dest: "uploads/"});

router.get('/', (request, response) => {
    response.send("Hello from server")
});

// Routes related to login/signup and account details.
router.post('/signup', signupController);
router.post('/login', loginController);
router.get('/get-account-details', userAuth, accountDetailsController);
router.post('/add-description', userAuth, addDescriptionController);

// Routes related to blogs.
router.post('/create-blog', userAuth, createBlogController);
router.get('/getBlogs', userAuth, getBlogsController);
router.get('/get-particular-blog/:id', userAuth, getParticularBlogController);
router.get('/get-public-blogs', userAuth, getPublicBlogsController);
router.put('/edit-blog', userAuth, editBlogController);
router.delete('/delete-blog/:id', userAuth, deleteBlogController);

// Routes related to images.
router.post('/upload', upload.single('file'), imageUploadController);
router.get('/uploads/:filename', getImage);

// Routes related to comments.
router.post('/add-comment', userAuth, addComment);
router.get('/get-comments/:blogId', userAuth, getComments);
router.put('/edit-comment', userAuth, updateComment);
router.delete('/delete-comment/:commentId', userAuth, deleteComment);

export default router;