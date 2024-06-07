import User from "../model/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function generateToken(username){
    const token = jwt.sign({username}, process.env.SECRET_KEY, {expiresIn: "1h"})
    return token;
}

async function loginController(request, response) {
    try {
        const user = await User.findOne({
            username: request.body.username
        });

        if (!user){
            return response.status(401).json({
                message: "User Not Found"
            })
        }

        if (user.password !== request.body.password){
            return response.status(401).json({
                message: "Wrong Password"
            })
        }

        const token = generateToken(request.body.username);

        return response.status(200).json({token});
    }
    catch (error){
        return response.status(500).json({message: error.message})
    }
}

export default loginController;