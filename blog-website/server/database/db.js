import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.URL;

async function connectionWithDatabase() {
    try {
        await mongoose.connect(URL);

        console.log("Database Connected Successfully.");
    }
    catch (error){
        console.log(error);
    }
}

export default connectionWithDatabase;