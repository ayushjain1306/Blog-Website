import React, { useState, useContext } from "react";
import { Box, List, ListItem, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import searchLogo from "./images/searchLogo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";

const NewBox = styled(Box)`
    width: 90vw;
    margin: auto;
`

const AnotherBox = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = scStyled.input`
    background-color: inherit;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: 12px 14px;
    font-size: 15px;
    width: 20vw;
    border-radius: 3px;
    margin-right: 15px;

    &:hover {
        border: 1px solid #1100ab;
    }

    @media screen and (max-width: 500px){
        width: 70%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 50%;
        font-size: 25px;
    }
`

const NewList = styled(List)`
    background-color: #d3d3d3;
    width: 22.5%;
    position: absolute;
    left: 37.3%;
    top: 20vh;
    z-index: 1;

    @media screen and (max-width: 500px){
        width: 70%;
        left: 10%;
        top: 18vh;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 50%;
        left: 23%;
        top: 17vh;
    }
`

const Text = styled(ListItem)`
    font-size: 12px;
    color: grey;
`

const NewListItem = styled(ListItem)`
    color: #1100ab;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`

const Image = scStyled.img`
    height: 25px;
    width: 25px;
`

const SearchBar = () => {
    const [fieldData, setFieldData] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [userBlogs, setUserBlogs] = useState([]);
    const { publicBlogs } = useSelector(state => state.getPublicBlogs);
    const { user } = useContext(UserContext);

    const handleChange = (e) => {
        setFieldData(e.target.value);

        const filteredBlogs = publicBlogs && publicBlogs.filter(blog => blog.title.toLowerCase().includes(e.target.value.toLowerCase()) && blog.user !== user.username);
        setBlogs(filteredBlogs);

        const anotherBlogs = publicBlogs && publicBlogs.filter(blog => blog.title.toLowerCase().includes(e.target.value.toLowerCase()) && blog.user === user.username)
        setUserBlogs(anotherBlogs);
    }

    return (
        <NewBox>
            <AnotherBox>
                <Input type="text" placeholder="Search blogs here" onChange={(e) => handleChange(e)} />
                <Image src={searchLogo} alt="search-image" />
            </AnotherBox>

            {
                fieldData !== "" &&
                <NewList>
                    {
                        (blogs && blogs.length > 0) || (userBlogs && userBlogs.length > 0) ?
                            <>
                                {
                                    blogs && blogs.length > 0 &&
                                    <>
                                        <Text>Public Blogs</Text>
                                        {
                                            blogs.map((blog) => {
                                                return (
                                                    <NewListItem key={blog._id}> <Link to={`/blog/?id=${blog._id}`} style={{ textDecoration: "inherit", color: "inherit" }}>{blog.title}</Link></NewListItem>
                                                )
                                            })
                                        }

                                    </>
                                }

                                {
                                    userBlogs && userBlogs.length > 0 &&
                                    <>
                                        <Text>Your Blogs</Text>
                                        {
                                            userBlogs.map((blog) => {
                                                return (
                                                    <NewListItem key={blog._id}> <Link to={`/blog/?id=${blog._id}`} style={{ textDecoration: "inherit", color: "inherit" }}>{blog.title}</Link></NewListItem>
                                                )
                                            })
                                        }

                                    </>
                                }
                            </>
                            :
                            <NewListItem style={{ color: "black", textDecoration: "none", fontWeight: "normal" }}>No result found.</NewListItem>
                    }

                </NewList>
            }
        </NewBox>
    )
}

export default SearchBar;