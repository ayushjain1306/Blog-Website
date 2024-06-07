import axios from 'axios';

const URL = "https://blog-website-nine-lemon.vercel.app";

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