// import axios from 'axios';
import { URL } from "../utils/backendURL.js";

async function uploadImage(data){
    try {
        let response = await fetch(`${URL}/upload`, {
            method: "POST",
            body: data
        })

        response = await response.json();

        return response;
    }
    catch (error){
        console.log(error);
    }
}

export default uploadImage;