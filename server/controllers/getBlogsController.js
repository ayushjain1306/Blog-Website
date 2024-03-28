import Blogs from "../model/blogSchema.js";

async function getBlogsController(request, response){
    try {
        const { username } = request.user;

        const blogs = await Blogs.find({user: username});

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

async function getParticularBlogController(request, response){
    try {
        const id = request.params.id;

        const data = await Blogs.find({"_id": id});

        return response.status(200).json(data);
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export { getBlogsController, getPublicBlogsController, getParticularBlogController };