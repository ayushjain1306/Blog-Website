import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { Box, styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Header from "../header/Header.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";
import CommentsSection from "./CommentsSection.jsx";
import Footer from "../footer/Footer.jsx";
import { UserContext } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";

const AnotherBox = styled(Box)`
    display: flex;
    min-height: 100vh;
    padding-bottom: 20px;
`

const OpenBlog = () => {
    const navigate = useNavigate();
    const { blogs } = useSelector(state => state.getBlogs)

    const [ searchParams ] = useSearchParams();
    const searchId = searchParams.get("id");

    const blog = blogs.find(obj => obj._id === searchId);

    let valid = false;

    const { isUser, user } = useContext(UserContext);

    const check = () => {
        if (isUser){
            if (blog && blog.user === user.username){
                valid = true;
            }

            return true;
        }

        valid = false;
        navigate("/login");
        return false;
    }

    useEffect(() => {
        check();
    })

    return (
        check && blog &&
        <>
            <Header />
            { valid && <FirstSection blog={blog} /> }

            <AnotherBox style={{marginTop: valid? "0px":"12vh"}}>
                <SecondSection blog = {blog} />
                <ThirdSection blog = {blog} />
            </AnotherBox>
            <CommentsSection blog={blog} />
            <Footer />
        </>
    )
}

export default OpenBlog;