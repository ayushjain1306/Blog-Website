import * as actionTypes from "../constants/blogConstants.js";

function getBlogsReducer(state = {blogs: []}, action){
    switch (action.type) {
        case actionTypes.GET_BLOGS_FROM_DATABASE_SUCCESS:
            return {blogs: action.payload}

        case actionTypes.GET_BLOGS_FROM_DATABASE_FAIL:
            return {error: action.payload}

        default: 
            return state
    }
}

export default getBlogsReducer;