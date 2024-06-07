import axios from 'axios';

const URL = "https://blog-website-nine-lemon.vercel.app";

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