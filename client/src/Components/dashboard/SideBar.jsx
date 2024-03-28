import React from "react";
import { Box, List, ListItem, styled } from "@mui/material";
import { Link } from "react-router-dom";

const NewBox = styled(Box)`
    background-color: rgba(25, 118, 210, 0.2);
    border-radius: 0px 5px 5px 0px;
    width: 20vw;
    min-height: 100vh;
    padding-left: 20px;
    color: #1100ab;
    padding-top: 12vh;
`

const NewListItem = styled(ListItem)`
    &:hover {
        text-decoration: underline;
    }
`

const NewLink = styled(Link)`
    color: inherit;
    text-decoration: inherit;
`

const SideBar = () => {

    return (
        <NewBox>
            <List>
                <NewListItem style={{cursor: "pointer"}}><NewLink to="/profile">Account & Profile</NewLink></NewListItem>
                <NewListItem style={{cursor: "pointer"}}><NewLink to="blogs">Your blogs</NewLink></NewListItem>
                <NewListItem style={{cursor: "pointer"}}><NewLink>Your Comments</NewLink></NewListItem>
                <NewListItem style={{cursor: "pointer"}}><NewLink>Comments on your blogs</NewLink></NewListItem>
                <NewListItem style={{cursor: "pointer"}}><NewLink>Delete Your Account</NewLink></NewListItem>
            </List>
        </NewBox>
    )
}

export default SideBar;