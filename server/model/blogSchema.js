import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    user: {
        type: "string",
        required: true
    },
    title: {
        type: "string",
        required: true
    },
    category: {
        type: "string",
        required: true
    },
    image: {
        type: "string",
        required: true
    },
    content: {
        type: "string",
        required: true
    },
    privacy: {
        type: "string",
        required: true
    }
});

const Blogs = mongoose.model('blogs', blogSchema);

export default Blogs;