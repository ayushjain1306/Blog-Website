import React, { useState, useContext } from 'react';
import { Box, Typography, Button, List, ListItem, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import { Link } from "react-router-dom";
import userImage from "./images/user.png";
import { UserContext } from "../../context/userContext.js";
import ProfileList from "./ProfileList.jsx";

const NewBox = styled(Box)`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NewList = styled(List)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const ListItems = styled(ListItem)`
    list-style: none;
    width: 15%;
    font-weight: bold;
`

const NewButton = styled(Button)`
    width: 23%;
    font-weight: bold;
    background-color: whitesmoke;
    color: #1100ab;
    margin-left: 2vw;

    &:hover {
        background-color: white;
    }
`

const NewLink = styled(Link)`
    color: white;
    text-decoration: none;
`

const Image = scStyled.img`
    height: 20px;
    width: 20px;
    margin-right: 1vw;
`

const Typo = styled(Typography)`
    font-weight: bold;
    font-size: 15px;
`

const SecondSection = () => {
    const [open, setOpen] = useState(false);
    const { user } = useContext(UserContext);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <NewBox>
            <NewList>
                <ListItems><NewLink to ="/">Home</NewLink></ListItems>
                <NewButton variant = "contained" onClick={() => handleClick()}>
                    <Image src={userImage} alt="user" />
                    <Typo>{user.username}</Typo>
                </NewButton>
            </NewList>

            {
                open && <ProfileList />
            }
        </NewBox>
    )
}

export default SecondSection;