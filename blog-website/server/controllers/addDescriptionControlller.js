import User from "../model/userSchema.js";

async function addDescriptionController(request, response){
    try {
        const { username } = request.user;

        const data = await User.find({username});

        const newData = {...data, description: request.body.data};

        await User.updateOne({username}, newData);

        return response.status(200).json({message: "Description added successfully."});
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export default addDescriptionController;