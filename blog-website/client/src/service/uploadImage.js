// import axios from 'axios';

const URL = "http://localhost:8000";

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