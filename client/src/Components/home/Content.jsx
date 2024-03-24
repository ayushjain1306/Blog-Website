import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import { Link } from "react-router-dom";
import NoBlog from "./NoBlogs.jsx";

const NewBox = styled(Box)`
    width: 70vw;
    padding-top: 10vh;
    padding-bottom: 10vh;
`

const AnotherBox = styled(Box)`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    min-height: 100vh;
`

const StyledBox = styled(Box)`
    background-color: #e3e3e3;
    border-radius: 5px;
    margin-right: 2vw;
    margin-bottom: 10vh;
    text-align: center;
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #1100ab;
    box-shadow: 10px 10px 2px -2px #1100ab;
    height: 46vh;
`

const Image = scStyled.img`
    height: 13vw;
    width: 15vw;
    border-radius: 10px;
`

const HeadTypo = styled(Typography)`
    margin-top: 15px;
    color: #1100ab;
    font-weight: bold;
`

const ContentTypo = styled(Typography)`
    font-size: 12px;
    color: black;
    margin: 15px 0px;
`

const NewLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const NewButton = styled(Button)`
    color: white;
    background-color: #1100ab;
    width: 30%;
    font-weight: bold;
    margin-left: 35%;
    margin-right: 35%;

    &:hover {
        background-color: #1100ab;
        opacity: 0.9;
    }
`

const Content = ({ blogs, content, setContent }) => {
    const handleClick = () => {
        window.location.href = "/create-new-blog"
    }

    if (!content && blogs){
        Promise.all(blogs.filter(blog => blog.privacy === "Public"))
        .then((filteredBlogs) => setContent(filteredBlogs));
    }

    return (
        content ?
        <NewBox>
            <AnotherBox>
                {
                    content.map(blog => {
                        return (
                            <StyledBox key = {blog._id}>
                                <NewLink to = {`/blog/?id=${blog._id}`}>
                                <Image src={blog.image} alt="Blog-Pic" />
                                <HeadTypo>{blog.title}</HeadTypo>
                                    {
                                        blog.content.length > 75 ?
                                            <ContentTypo>{blog.content.substring(0, 75)}...</ContentTypo>
                                        :
                                            <ContentTypo>{blog.content}</ContentTypo>
                                    }
                                </NewLink>
                            </StyledBox>
                        )
                    })
                }
            </AnotherBox>

            <NewButton variant="contained" onClick={() => handleClick()}>Create More Blogs</NewButton>
        </NewBox>
        :
        <NewBox>
            <NoBlog />
        </NewBox>
    )
}

export default Content;