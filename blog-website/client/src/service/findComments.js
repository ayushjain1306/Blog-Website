import axios from 'axios';
import { URL } from "../utils/backendURL.js";

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

export async function getComments(token){
    try {
        const headers = {
            "Authorization": token
        }

        const { data } = await axios.get(`${URL}/get-user-comments`, { headers });

        return data;
    }
    catch (error){
        console.log(error);
    }
}

export async function getPublicComments(token){
    try {
        const headers = {
            'Authorization': token
        };

        const { data } = await axios.get(`${URL}/get-public-comments`, { headers });

        return data;
    }
    catch(error){
        console.log(error);
    }
}

export default findComments;