import axios from "axios";

const URL = "https://blog-website-nine-lemon.vercel.app";

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