import axios from "axios";

const URL = "https://blog-website-nine-lemon.vercel.app/";

const addDescription = async(token, data) => {
    try {
        const headers = {
            "Authorization": token
        }

        const newData = {data};

        await axios.post(`${URL}/add-description`, newData, { headers });

        alert("Description added successfully.");

        window.location.href = "/";
    }
    catch (error){
        console.log(error);
    }
}

export default addDescription;