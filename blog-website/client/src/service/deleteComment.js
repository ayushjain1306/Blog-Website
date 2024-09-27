import axios from "axios";
import { URL } from "../utils/backendURL.js";

async function deleteComment(id, token){
    try {
        const headers = {
            "Authorization": token
        }

        await axios.delete(`${URL}/delete-comment/${id}`, { headers });

        alert("Comment deleted successfully.");

        window.location.reload();
    }
    catch (error){
        console.log(error);
    }
}

export default deleteComment;