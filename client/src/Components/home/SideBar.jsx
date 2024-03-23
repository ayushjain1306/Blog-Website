import React from "react";
import { Box, List, ListItem, styled, Button } from "@mui/material";
import { styled as scStyled } from "styled-components";
import Cookies from "js-cookie";

const NewBox = styled(Box)`
    background-color: whitesmoke;
    border-radius: 0px 5px 5px 0px;
    width: 20vw;
    min-height: 100vh;
    padding-left: 20px;
    color: #1100ab;
`

const NewButton = styled(Button)`
    background-color: #1100ab;
    width: 65%;
    margin: 20px 23% 20px 12%;
    font-size: 12px;

    &: hover{
        opacity: 0.8;
        background-color: #1100ab;
    }
`

const Details = scStyled.details`
    margin: 4px 0px;
`

const AnotherListItems = styled(ListItem)`
    margin-left: 20px;
    cursor: pointer;
`

const categories = ["Music", "Creativity", "Sports", "Literature", "Food & Recipes", "Health & Wellness", "Travel"];

const SideBar = ({ blogs, setContent }) => {
    const token = Cookies.get("token");

    const [header, payload, signature] = token ? token.split('.') : "";
    let user = "";

    if (header && signature){
        const decodedPayload = JSON.parse(atob(payload));

        user = decodedPayload.username;
    }

    const handleClick = () => {
        window.location.href = "/create-new-blog";
    }

    const handleClickItems = (category) => {
        setContent(blogs.filter(blog => blog.category === category && blog.privacy === "Public"));
    }

    const handleClickAll = () => {
        setContent(blogs.filter(blog => blog.privacy === "Public"));
    }

    const handleClickYour = () => {
        setContent(blogs.filter(blog => blog.user === user));
    }

    return (
        <NewBox>
            <Box style = {{width:"100%"}}>
                <NewButton variant = "contained" onClick = {() => handleClick()}>Create a New Blog</NewButton>
            </Box>

            <List>
                <ListItem style={{cursor: "pointer"}} onClick={() => handleClickAll()}>Latest Blogs</ListItem>
                <ListItem style={{cursor: "pointer"}} onClick={() => handleClickYour()}>Your Blogs</ListItem>
                <Details>
                    <summary style={{marginBottom: "4px"}}>Categories</summary>
                    {
                        categories.map(category => {
                            return (
                                <AnotherListItems key={category} onClick={() => handleClickItems(category)}>{category}</AnotherListItems>
                            )
                        })
                    }
                </Details>
            </List>
        </NewBox>
    )
}

export default SideBar;