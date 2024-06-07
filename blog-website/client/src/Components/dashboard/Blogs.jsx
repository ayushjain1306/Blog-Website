import React, { useState, useEffect } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NewBox = styled(Box)`
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    display: grid;
    grid-template-columns: 25% 25% 25%;
    margin-top: 5vh;
    justify-content: space-evenly;
    min-height: 40vh;

    @media screen and (max-width: 500px){
        width: 90%; 
        margin-left: 5%;
        margin-right: 5%;

        grid-template-columns: 45% 45%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        grid-template-columns: 30% 30% 30%;
    }
`

const AnotherBox = styled(Box)`
    background-color: rgba(25, 118, 210, 0.2);
    padding-top: 30px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5vh;

    &:hover {
        border: 1px solid #1100ab;
    }
`

const NewButton = styled(Button)`
    background-color: #1100ab;
    font-weight: bold;
    margin-bottom: 10vh;

    &:hover {
        background-color: #1100ab;
        opacity: 0.9;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const HeadTypo = styled(Typography)`
    text-align: left;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    font-size: 25px;
    margin-top: 6vh;

    @media screen and (max-width: 500px){
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }
`

const Image = scStyled.img`
    height: 22vh;
    width: 13vw;
    border-radius: 10px;

    @media screen and (max-width: 500px){
        width: 35vw;
        height: 15vh;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        height: 15vh;
        width: 18vw;
    }
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-weight: bold;
    margin-top: 10px;

    @media screen and (max-width: 500px){
        padding: 0px 4px;
    }

    @media screen and (min-width: 500px) and (max-width: 100px){
        font-size: 17px;
    }
`

const AnotherTypo = styled(Typography)`
    font-size: 15px;
    padding: 10px;

    @media screen and (max-width: 500px){
        font-size: 10px;
    }
`

const NewTypo = styled(Typography)`
    font-weight: bold;
    width: 20%;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: whitesmoke;
    }

    @media screen and (max-width: 500px){
        width: 29%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const StyledBox = styled(Box)`
    display: flex;
    color: #1100ab;
    width: 50%;
    align-items: center;
    justify-content: space-evenly;
    margin: auto;
    padding-top: 5vh;
`

const EmptyBox = styled(Box)`
    text-align: center;
    margin-top: 30vh;
    width: 100%;
    margin-bottom: 10vh;
`

const EmptyTypo = styled(Typography)`
    font-size: 20px;
    color: #1100ab;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10vh;
`

const EmptyButton = styled(Button)`
    background-color: #1100ab;
    font-weight: bold;

    &:hover {
        background-color: #1100ab;
        opacity: 0.9;
    }
`

const categories = ["All", "Public", "Private"];

const Blogs = ({ blogs }) => {
    const [blogData, setBlogData] = useState(blogs);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/create-blog");
    }

    const handleClickBlog = (id) => {
        navigate(`/blog/?id=${id}`);
    }
    
    const handleClickCategory = (category) => {
        categories.forEach((oneCategory) => {
            document.getElementById(oneCategory).style.border = "0px";
        })

        document.getElementById(category).style.border = "1px solid #1100ab";

        if (category === "All"){
            setBlogData(blogs);
        }
        else {
            setBlogData(blogs.filter(blog => blog.privacy === category));
        }
    }

    return (
        blogs.length > 0 || blogData.length > 0 ?
        <Box style={{display: "block", marginTop: "5vh", textAlign: "center", width: "100%"}}>
            <HeadTypo>Blogs</HeadTypo>
            <StyledBox>
                {
                    categories.map((category) => {
                        return(
                            <NewTypo key={category} id={category} onClick={() => handleClickCategory(category)}>{category}</NewTypo>
                        )
                    })
                }
            </StyledBox>
            
            <NewBox>
                {
                    blogData.map((blog) => {
                        return (
                            <AnotherBox key={blog._id} onClick={() => handleClickBlog(blog._id)}>
                                <Image src={blog.image}  />
                                <Typo>
                                    {blog.title}
                                </Typo>
                                <AnotherTypo>
                                    {blog.content.substring(0,50)}...
                                </AnotherTypo>
                            </AnotherBox>
                        )
                    })
                }
            </NewBox>
            <NewButton variant="contained" onClick={() => handleClick()}>Create More Blogs</NewButton>
        </Box>
        :
        <EmptyBox>
                <EmptyTypo>You haven't created any blog yet.</EmptyTypo>

                <EmptyButton variant="contained"><Link to='/create-blog' style={{color: "inherit", textDecoration: "inherit"}}>Start creating blogs</Link></EmptyButton>
        </EmptyBox>
    )
}

export default Blogs;