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
    
    @media screen and (max-width: 500px){
        display: none;
    }
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
    font-weight: 600;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 25px;
    }
`

const NewButton = styled(Button)`
    width: 25%;
    font-weight: bold;
    margin-left: 2vw;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        margin-left: 4vw;
        width: 35%;
    }
`

const NewLink = styled(Link)`
    color: black;
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
                <NewButton variant = "outlined" onClick={() => handleClick()}>
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