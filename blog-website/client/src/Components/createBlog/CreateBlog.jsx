import React, { useState, useContext, useEffect } from "react";
import { Box, styled } from "@mui/material";
import Header from "../header/Header.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import noImage from "./images/no-image.png";
import Loader from "../../Loader.jsx";
import Footer from "../footer/Footer.jsx";
import { UserContext } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";

const AnotherBox = styled(Box)`
    margin-top: 60px;
    background-color: rgb(0 150 136 / 15%);
    padding-top: 50px;
    padding-bottom: 50px;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        margin-top: 8.5vh;
    }
`

const CreateBlog = () => {
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { isUser } = useContext(UserContext);

    const check = () => {
        if (isUser){
            return true;
        }

        navigate('/login');
        return false;
    }

    useEffect(() => {
        check();
    }, [])

    return (
        check() &&
        <>
            <Loader />
            <Header />
            <AnotherBox>
                <FirstSection image = {image != null ? image : noImage} />
                <SecondSection image = {image} setImage = {setImage} />
            </AnotherBox>
            <Footer />
        </>
    )
}

export default CreateBlog;