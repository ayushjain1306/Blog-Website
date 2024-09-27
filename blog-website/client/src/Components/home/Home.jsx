import React, { useEffect, useContext } from "react";
import { Box, styled } from "@mui/material";
import Header from "../header/Header.jsx";
import SearchBar from "./SearchBar.jsx";
import Loader from "../../Loader.jsx";
import Content from "./Content.jsx";
import CreateButton from "./CreateButton.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import extractBlogs from "../../redux/actions/extractBlogs.js";
import extractPublicBlogs from "../../redux/actions/extractPublicBlogs.js";
import Footer from "../footer/Footer.jsx";
import { UserContext } from "../../context/userContext.js";

const NewBox = styled(Box)`
    padding-top: 13vh;
    min-height: 100vh;
    background-color: #ebebe9;
    width: 100%;
    padding-bottom: 8vh;
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

    return (
        check() &&
        <Box>
            <Loader />
            <Header />
            <NewBox>
                <SearchBar />
                <CreateButton />
                <Content />
            </NewBox>
            <Footer />
        </Box>
    )
}

export default Home;