import React, { useState } from "react";
import { List, ListItem, Button, styled } from "@mui/material";
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
    border-radius: 5px;
    height: 15vh;

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
    margin-bottom: 10px;
    width: 100%;
    color: #1100ab;
    font-weight: bold;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 25px;
        margin-bottom: 18px;
    }
`

const NewButton = styled(Button)`
    background-color: #1100ab;
    font-weight: bold;
    width: 80%;

    &:hover {
        background-color: #1100ab;
        opacity: 0.9;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const ProfileList = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    return (
        <NewList>
            <NewListItem><Link to="/profile" style={{color: "inherit", textDecoration: "inherit"}}>Your Profile</Link></NewListItem>
            <NewButton variant="contained" onClick={() => handleClick()}>Log Out</NewButton>

            {
                open && <DialogBox open={open} setOpen={setOpen} />
            }
        </NewList>
    )
}

export default ProfileList;