import User from "../model/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function generateToken(username) {
    const token = jwt.sign({username}, process.env.SECRET_KEY, {expiresIn: "1h"});
    return token;
}

async function signupController(request, response) {
    try {
        const exist1 = await User.findOne({
            email: request.body.email
        })

        const exist2 = await User.findOne({
            username: request.body.username
        })

        if (exist1){
            return response.status(403).json({
                message: "This email already exists"
            })
        }

        if (exist2) {
            return response.status(401).json({
                message: "This username already exists"
            })
        }

        const token = generateToken(request.body.username);

        const userWithToken = {...request.body, token};

        const newUser = new User(userWithToken);

        await newUser.save();

        return response.status(200).json({token})
    }
    catch (error) {
        return response.status(500).json({message: error.message})
    }
}

export default signupController;