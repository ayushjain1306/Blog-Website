import Blogs from "../model/blogSchema.js";

const URL = "http://localhost:8000";

async function createBlogController(request, response) {
    try {
        const data = request.body;
        const user = request.user.username;

        const blog = new Blogs({...data, user});
        await blog.save();

        response.status(200).json({message: "Blog created successfully."});
    }
    catch (error){
        console.log(error);
        response.status(500).json({error: error.message});
    }
}

export default createBlogController;