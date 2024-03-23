import Blogs from "../model/blogSchema.js";

async function deleteBlogController(request, response){
    try {
        const id = request.params.id;
        await Blogs.findByIdAndDelete(id);

        response.status(200).json({message: "Blog Deleted successfully."});
    }
    catch (error){
        console.log(error);
        response.status(500).json({message: error.message});
    }
}

export default deleteBlogController;