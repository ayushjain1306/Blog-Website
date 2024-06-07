import axios from 'axios';

const URL = 'http://localhost:8000';

export const performSignup = async (data) => {
    document.getElementById("loader").style.display = "block";
    
    try {
        await axios.post(`${URL}/signup`, data);

        alert("User account created successfully.");

        window.location.reload();
    }
    catch(error) {
        if (error.message === "Network Error"){
            alert("Check yout Network Connection");
        }
        else {
            console.log(error.message);
        }
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
        if (error.message === "Network Error"){
            alert("Check your network connection.");
        }
        else {
            console.log(error.message);
        }
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