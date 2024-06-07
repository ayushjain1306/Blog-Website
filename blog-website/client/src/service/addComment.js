import axios from "axios";

const URL = "https://blog-website-nine-lemon.vercel.app";

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