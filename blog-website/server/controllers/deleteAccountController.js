import User from "../model/userSchema.js";
import Comments from "../model/commentsSchema.js";
import Blogs from "../model/blogSchema.js";

async function deleteAccount(request, response){
    try {
        const { username } = request.body;

        await User.deleteMany({ username });

        await Blogs.deleteMany({ user: username });

        await Comments.deleteMany({ username });

        response.status(200).json({message: "Account Deleted Successfully."});
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}

export default deleteAccount;