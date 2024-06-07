import axios from "axios";

const URL = "http://localhost:8000";

async function editComment(data, token){
    try {
        const headers = {
            "Authorization": token
        }

        await axios.put(`${URL}/edit-comment`, data, { headers });

        alert("Comment updated successfully.");

        window.location.reload();
    }
    catch (error){
        console.log(error);
    }
}

export default editComment;