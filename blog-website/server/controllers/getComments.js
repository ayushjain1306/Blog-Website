import Comments from "../model/commentsSchema.js";

async function getUserComments(request, response){
    try {
        const { username } = request.user;

        const data = await Comments.find({username});

        return response.status(200).json(data);
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

async function getPublicComments(request, response){
    try {
        const { username } = request.user;

        const data = await Comments.find({authorUsername: username});

        return response.status(200).json(data);
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export {
    getUserComments,
    getPublicComments
};