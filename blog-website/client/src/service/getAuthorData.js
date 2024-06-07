import axios from "axios";

const URL = "https://blog-website-nine-lemon.vercel.app/";

async function getAuthorData(username, token){
    try {
        const headers = {
            "Authorization": token,
            "username": username
        }

        const { data } = await axios.get(`${URL}/get-author-data`, { headers });

        return data;
    }
    catch (error){
        console.log(error);
    }
}

export default getAuthorData;