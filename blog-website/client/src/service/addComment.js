import axios from "axios";
import { URL } from "../utils/backendURL.js";

async function addComment(data, token) {
    try {
        const headers = {
            "Authorization": token
        }

        await axios.post(`${URL}/add-comment`, data, { headers });

        alert("Comment added successfully.");

        window.location.reload();
    }
    catch (error){
        console.log(error);
    }
}

export default addComment;