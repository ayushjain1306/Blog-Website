import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import getBlogsReducer from "./reducers/blogReducer";
import publicBlogsReducer from "./reducers/publicBlogsReducer";

const reducer = combineReducers({
    getBlogs: getBlogsReducer,
    getPublicBlogs: publicBlogsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;