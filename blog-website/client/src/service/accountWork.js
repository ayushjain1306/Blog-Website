import axios from 'axios';
import { URL } from "../utils/backendURL.js";

export const performSignup = async (data) => {
    
    try {
        await axios.post(`${URL}/signup`, data);

        alert("User account created successfully.");

        window.location.reload();
    }
    catch(error) {
        alert("Failed to Create Account. Try again later!");
    }
}

export const performLogin = async(data) => {
    try {
        let response = await axios.post(`${URL}/login`, data);

        return response.data;
    }
    catch (error){
        alert("Failed to Log In. Try again later!");
    }
}

export const getAccountDetails = async(token) => {
    const headers = {
        "Authorization": token
    }

    try {
        const { data } = await axios.get(`${URL}/get-account-details`, { headers });

        return data;
    }
    catch (error){
        console.log(error);
    }
}