import axios from 'axios';
import { URL } from "../utils/backendURL.js";

async function deleteBlog(data){
    try {
        const token = localStorage.getItem("token");

        const headers = {
            "Authorization": token ? token : ""
        }

        await axios.delete(`${URL}/delete-blog/${data._id}`, { headers });

        alert("Blog deleted successfully.");

        window.location.href = "/";
    }
    catch (error){
        console.log(error);
    }
}

export default deleteBlog;