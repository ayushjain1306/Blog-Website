import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true,
        trim: true
    },
    email: {
        type: "string",
        unique: true,
        required: true,
        lowercase: true
    },
    username: {
        type: "string",
        unique: true,
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    token: {
        type: 'string',
        required: true
    },
    description: {
        type: "string"
    }
})

const User = mongoose.model('users', userSchema);

export default User;