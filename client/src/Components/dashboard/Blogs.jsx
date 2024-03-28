import React, { useState, useEffect } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewBox = styled(Box)`
    width: 80vw;
    display: grid;
    grid-template-columns: 25% 25% 25%;
    margin-top: 5vh;
    justify-content: space-evenly;
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

    &:hover {
        background-color: #1100ab;
        opacity: 0.9;
    }
`

const Image = scStyled.img`
    height: 22vh;
    width: 13vw;
    border-radius: 10px;
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-weight: bold;
    margin-top: 10px;
`

const AnotherTypo = styled(Typography)`
    font-size: 15px;
    padding: 10px;
`

const NewTypo = styled(Typography)`
    font-weight: bold;
    width: 20%;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: whitesmoke;
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
    margin-top: 13vh;
`

const EmptyTypo = styled(Typography)`
    font-size: 20px;
    color: #1100ab;
    text-align: center;
`

const categories = ["All", "Public", "Private"];

const Blogs = () => {
    const { blogs } = useSelector(state => state.getBlogs);
    const [blogData, setBlogData] = useState(blogs);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setBlogData(blogs);
        }, 1000);
    }, []);

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
        blogData.length > 0 ?
        <Box style={{display: "block", marginTop: "15vh", textAlign: "center"}}>
            <NewButton variant="contained" onClick={() => handleClick()}>Create More Blogs</NewButton>

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
        </Box>
        :
        <EmptyBox>
                <EmptyTypo>
                    No blogs created.
                </EmptyTypo>
        </EmptyBox>
    )
}

export default Blogs;