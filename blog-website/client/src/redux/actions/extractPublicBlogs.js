import axios from "axios";
import * as actionTypes from "../constants/blogConstants.js";
import Cookies from "js-cookie";
import { URL } from "../../utils/backendURL.js";

const extractPublicBlogs = () => async(dispatch) => {
    try {
        const token = Cookies.get("token");

        const headers = {
            "Authorization": token ? token : ""
        }

        const {data} = await axios.get(`${URL}/get-public-blogs`, { headers });

        document.getElementById("loader").style.display = "block";

        dispatch({
            type: actionTypes.GET_PUBLIC_BLOGS_FROM_DATABASE_SUCCESS,
            payload: data
        })

        document.getElementById("loader").style.display = "none";
    }
    catch (error){
        dispatch({
            type: actionTypes.GET_PUBLIC_BLOGS_FROM_DATABASE_FAIL,
            payload: error.message
        })
    }
}

export default extractPublicBlogs;