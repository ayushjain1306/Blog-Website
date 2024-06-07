import User from "../model/userSchema.js";

async function accountDetailsController(request, response){
    try {
        const { username } = request.user;

        const data = await User.find({username});

        return response.status(200).json(data);
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export default accountDetailsController;