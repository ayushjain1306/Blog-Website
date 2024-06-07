import axios from 'axios';

const URL = 'https://blog-website-nine-lemon.vercel.app';

export const performSignup = async (data) => {
    document.getElementById("loader").style.display = "block";
    
    try {
        await axios.post(`${URL}/signup`, data);

        alert("User account created successfully.");

        window.location.reload();
    }
    catch(error) {
        alert("Failed to Create Account. Try again later!");
    }

    document.getElementById("loader").style.display= "none";
}

export const performLogin = async(data) => {
    document.getElementById("loader").style.display = "block";
    try {
        let response = await axios.post(`${URL}/login`, data);

        document.getElementById("loader").style.display= "none";

        return response.data;
    }
    catch (error){
        alert("Failed to Log In. Try again later!");
    }
    
    document.getElementById("loader").style.display= "none";
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