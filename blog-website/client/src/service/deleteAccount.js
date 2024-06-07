import axios from "axios";
import Cookies from "js-cookie";

const URL = "https://blog-website-nine-lemon.vercel.app";

async function deleteAccount(data, token){
    try {
        const headers = {
            "Authorization": token ? token : ""
        }

        const response = await axios.post(`${URL}/delete-account`, { username: data }, { headers });

        if (response){
            alert("Your account deleted successfully");
            Cookies.remove("token");
            window.location.href = "/";
        }
    }
    catch (error){
        console.log(error);
    }
}

export default deleteAccount;