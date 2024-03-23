import Blogs from "../model/blogSchema.js";

async function getBlogsController(request, response){
    try {
        const blogs = await Blogs.find({});

        response.status(200).json(blogs);
    }
    catch (error){
        response.status(500).json({error: error.message})
    }
}

async function getPublicBlogsController(request, response){
    try {
        const blogs = await Blogs.find({privacy:"Public"});

        response.status(200).json(blogs);
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}

export { getBlogsController, getPublicBlogsController };