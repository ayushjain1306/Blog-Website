import axios from "axios";
import Cookies from "js-cookie";
import { URL } from "../utils/backendURL.js";

async function createBlog(data){
    try {
        const token = Cookies.get("token");

        const headers = {
            "Authorization": token ? token : ""
        }

        const response = await axios.post(`${URL}/create-blog`, data, { headers });
        
        if (response) {
            alert("Blog created successully.");
            window.location.href = "/";
        }
        
    }
    catch (error){
        console.log(error);
    }
}

export default createBlog;