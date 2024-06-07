// import axios from 'axios';

const URL = "https://blog-website-nine-lemon.vercel.app";

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