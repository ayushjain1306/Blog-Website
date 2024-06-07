import axios from "axios";

const URL = "http://localhost:8000";

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