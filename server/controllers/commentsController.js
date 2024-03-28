import Comments from "../model/commentsSchema.js";

async function addComment(request, response) {
    try {
        const comment = request.body;

        await Comments.create(comment);

        response.status(200).json({message: "Comment added successfully."});
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}

async function getComments(request, response){
    try {
        const blogId = request.params.blogId;

        const comments = await Comments.find({blogId});

        response.status(200).json(comments);
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}

async function updateComment(request, response){
    try {
        const newComment = request.body;

        await Comments.updateOne({"_id": newComment._id}, newComment);

        response.status(200).json({message: "Comment updated successfully."});
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}

async function deleteComment(request, response){
    try {
        const commentId = request.params.commentId;

        await Comments.deleteOne({"_id": commentId});

        response.status(200).json({message: "Comment deleted successfully."});
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}

export {
    addComment,
    getComments,
    updateComment,
    deleteComment
}