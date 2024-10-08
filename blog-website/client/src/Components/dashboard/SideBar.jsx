import React, { useState } from "react";
import { Box, List, ListItem, styled } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteDialogBox from "./DeleteDialogBox.jsx";

const NewBox = styled(Box)`
    background-color: whitesmoke;
    padding-left: 20px;
    color: #1100ab;
    padding-top: 10vh;
    box-shadow: 3px 8px 8px -3px rgb(0, 0, 0, 0.2);
`

const NewListItem = styled(ListItem)`
    width: 15%;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width: 500px){
        width: 45%;
        font-size: 14px;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 24%;
        font-size: 18px;
    }
`

const NewLink = styled(Link)`
    color: inherit;
    text-decoration: inherit;
`

const SideBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <NewBox>
            <List style={{display: "flex", alignItems: "center"}}>
                <NewListItem><NewLink to="/">Home</NewLink></NewListItem>
                <NewListItem onClick={() => setOpen(true)}>Delete Your Account</NewListItem>
            </List>

            {
                open && <DeleteDialogBox open={open} setOpen={setOpen} />
            }
        </NewBox>
    )
}

export default SideBar;