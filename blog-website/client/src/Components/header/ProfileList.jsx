import React, { useState } from "react";
import { List, ListItem, styled } from "@mui/material";
import { Link } from "react-router-dom";
import DialogBox from "./DialogBox.jsx";

const NewList = styled(List)`
    background-color: #e3e3e3;
    position: absolute;
    width: 16%;
    text-align: center;
    padding-top: 10px;
    top: 10vh;
    right: 12vw;
    border-radius: 3px;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        top: 9vh;
        width: 24%;
        height: 12vh;
        right: 8vw;
    }
`

const NewListItem = styled(ListItem)`
    color: black;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    cursor: pointer;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 25px;
    }
`

const ProfileList = () => {
    const [open, setOpen] = useState(false);

    return (
        <NewList>
            <NewListItem><Link to="/profile" style={{color: "inherit", textDecoration: "inherit"}}>Your Profile</Link></NewListItem>
            <NewListItem onClick={() => setOpen(true)}>Log Out</NewListItem>

            {
                open && <DialogBox open={open} setOpen={setOpen} />
            }
        </NewList>
    )
}

export default ProfileList;