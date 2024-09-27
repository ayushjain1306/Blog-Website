import axios from "axios";
import { URL } from "../utils/backendURL.js";

async function getAuthorData(username, token){
    try {
        const headers = {
            "Authorization": token,
            "username": username
        }

        const { data } = await axios.get(`${URL}/get-author-data`, { headers });

        return data;
    }
    catch (error){
        console.log(error);
    }
}

export default getAuthorData;