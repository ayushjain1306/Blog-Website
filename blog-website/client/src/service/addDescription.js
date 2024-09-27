import axios from "axios";
import { URL } from "../utils/backendURL.js";

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