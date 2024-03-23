import axios from "axios";

const URL = "http://localhost:8000";

async function addComment(data) {
    try {
        await axios.post(`${URL}/add-comment`, data);

        alert("Comment added successfully.");

        window.location.reload();
    }
    catch (error){
        console.log(error);
    }
}

export default addComment;