import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function userAuth(request, response, next){
    const token = request.headers.authorization;

    if (!token){
        return response.status(401).json({message: "Token not found."});
    }

    try {
        const decodedResult = jwt.verify(token, process.env.SECRET_KEY);

        request.user = decodedResult;

        next();
    }
    catch (error){
        return response.status(500).json({message: "Invalid token."});
    }
}

export default userAuth;