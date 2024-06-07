import * as actionTypes from "../constants/blogConstants.js";

function publicBlogsReducer(state = {publicBlogs: []}, action){
    switch(action.type){
        case actionTypes.GET_PUBLIC_BLOGS_FROM_DATABASE_SUCCESS:
            return {publicBlogs: action.payload};

        case actionTypes.GET_PUBLIC_BLOGS_FROM_DATABASE_FAIL:
            return {error: action.payload};

        default: 
            return state;
    }
}

export default publicBlogsReducer;