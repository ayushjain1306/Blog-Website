import React, { useState, useEffect, useContext } from "react";
import { Box, styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Header from "../header/Header.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";
import CommentsSection from "../comments/CommentSection.jsx";
import Footer from "../footer/Footer.jsx";
import { UserContext } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import getParticularBlog from "../../service/getParticularBlog.js";

const AnotherBox = styled(Box)`
    display: flex;
    min-height: 100vh;
    padding-bottom: 20px;
`

const OpenBlog = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const token = Cookies.get("token");

    const [ searchParams ] = useSearchParams();
    const searchId = searchParams.get("id");

    const { isUser } = useContext(UserContext);

    const check = () => {
        if (isUser){

            return true;
        }
        navigate("/login");
        return false;
    }

    useEffect(() => {
        if (check()){
            const particularBlog = async() => {
                const response = await getParticularBlog(searchId, token);
                setBlog(response[0]);
            }

            particularBlog();
        }
    }, []);

    return (
        check && blog &&
        <Box style={{paddingTop: "13vh", backgroundColor: "rgb(0 150 136 / 15%)"}}>
            <Header />
            <FirstSection blog={blog} />

            <AnotherBox>
                <SecondSection blog = {blog} />
                <ThirdSection blog = {blog} />
            </AnotherBox>
            <CommentsSection blog={blog} />
            <Footer />
        </Box>
    )
}

export default OpenBlog;