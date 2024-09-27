import axios from 'axios';
import { URL } from "../utils/backendURL.js";

async function editBlog(data){
    try {
        const token = localStorage.getItem("token");

        const headers = {
            "Authorization": token ? token : ""
        }

        await axios.put(`${URL}/edit-blog`, { headers }, data);

        alert("Blog updated successfully.");
        window.location.href = "/";
    }
    catch (error){
        console.log(error);
    }
}

export default editBlog;