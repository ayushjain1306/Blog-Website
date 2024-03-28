import axios from 'axios';

const URL = "http://localhost:8000";

async function findComments(id, token){
    try {
        const headers = {
            "Authorization": token
        }

        const { data } = await axios.get(`${URL}/get-comments/${id}`, { headers });

        return data;
    }
    catch (error){
        console.log(error);
    }
}

export default findComments;