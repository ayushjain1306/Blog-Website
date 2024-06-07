import axios from 'axios';

const URL = "http://localhost:8000";

async function getParticularBlog(id, token){
    const headers = {
        "Authorization": token
    }

    try {
        const { data } = await axios.get(`${URL}/get-particular-blog/${id}`, { headers });

        return data;
    }
    catch (error){
        console.log(error);
    }
}

export default getParticularBlog;