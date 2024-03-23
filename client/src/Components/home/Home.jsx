import React, { useEffect, useState, useContext } from "react";
import { Box, styled } from "@mui/material";
import Header from "../header/Header.jsx";
import SideBar from "./SideBar.jsx";
import Content from "./Content.jsx";
import Loader from "../../Loader.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import extractBlogs from "../../redux/actions/extractBlogs.js";
import extractPublicBlogs from "../../redux/actions/extractPublicBlogs.js";
import Footer from "../footer/Footer.jsx";
import { UserContext } from "../../context/userContext.js";

const NewBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-top: 72px;
`

const Home = () => {
    const dispatch = useDispatch();
    const { isUser } = useContext(UserContext);
    const navigate = useNavigate();

    const check = () => {
        if (isUser){
            return true;
        }

        navigate('/login');
        return false;
    }

    useEffect(() => {
        if (check()){
            dispatch(extractBlogs());
            dispatch(extractPublicBlogs());
        }
    }, [dispatch]);

    const { blogs } = useSelector(state => state.getBlogs);
    const { publicBlogs } = useSelector(state => state.getPublicBlogs);

    const [content, setContent] = useState(null);

    return (
        check() &&
        <Box>
            <Loader />
            <Header />
            <NewBox>
                <SideBar blogs={blogs} setContent={setContent} />
                {   
                    content ? 
                        <Content content={content} blogs={blogs} setContent={setContent} />: 
                        <Content content={publicBlogs} blogs={blogs} setContent={setContent}/> 
                }
            </NewBox>
            <Footer />
        </Box>
    )
}

export default Home;