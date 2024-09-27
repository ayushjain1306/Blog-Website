import axios from 'axios';
import * as actionTypes from "../constants/blogConstants.js";
import Cookies from "js-cookie";
import { URL } from "../../utils/backendURL.js";

const extractBlogs = () => async (dispatch) => {
    try {
        const token = Cookies.get("token");

        const headers = {
            "Authorization": token ? token : ""
        }

        const { data } = await axios.get(`${URL}/getBlogs`, { headers });

        dispatch({
            type: actionTypes.GET_BLOGS_FROM_DATABASE_SUCCESS,
            payload: data,
        })
    }
    catch (error){
        dispatch({
            type: actionTypes.GET_BLOGS_FROM_DATABASE_FAIL,
            payload: error.message
        })
    }
}

export default extractBlogs;