import User from "../model/userSchema.js";
import Blogs from "../model/blogSchema.js";

async function getAuthorDataController(request, response){
    try {
        const requiredUser = request.headers.username;

        const userResult = await User.findOne({"username": requiredUser});

        const data = {
            name: userResult.name,
            username: userResult.username,
            description: userResult.description
        };

        const blogResult = await Blogs.find({"user": requiredUser, "privacy": "Public"});

        return response.status(200).json({...data, blogs: blogResult});
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export default getAuthorDataController;