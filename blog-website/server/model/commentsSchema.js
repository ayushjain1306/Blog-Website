import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
    username: {
        type: "String",
        required: true
    },
    blogId: {
        type: "String",
        required: true
    },
    comment: {
        type: "String",
        required: true
    },
    authorUsername: {
        type: "String",
        required: true
    }
});

const Comments = mongoose.model("comments", commentsSchema);

export default Comments;