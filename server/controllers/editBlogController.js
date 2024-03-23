import Blogs from "../model/blogSchema.js";

async function editBlogController(request, response){
    try {
        const username = request.user.username;
        const blog = request.body;

        await Blogs.updateOne({"_id": blog._id}, {...blog, username});

        response.status(200).json({message: "Data updated successfully."});
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}

export default editBlogController;