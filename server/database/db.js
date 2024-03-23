import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.URL;

async function connectionWithDatabase() {
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: 'true',
            useNewURLParser: "true"
        });

        console.log("Database Connected Successfully.");
    }
    catch (error){
        console.log(error);
    }
}

export default connectionWithDatabase;