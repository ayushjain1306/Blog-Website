import React, { useState } from 'react';
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import logo from "./images/logo.png";
import HamburgerMenu from './HamburgerMenu';

const HeadBox = styled(Box)`
    width: 50%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 500px){
        width: 100%;
    }
`

const NewBox = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AnotherBox = styled(Box)`
    width: 5%;
    padding-left: 20px;
    cursor: pointer;

    @media screen and (min-width: 500px){
        display: none;
    }

    @media screen and (max-width: 1100px){
        width: 9%;
    }
`

const StyledBox = styled(Box)`
    border: 2px solid white;
    border-radius: 10px;
    margin-top: 5px;
`

const Typo = styled(Typography)`
    font-weight: bold;
    font-size: 20px;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 30px;
    }
`

const Image = scStyled.img`
    width: 6%;
    margin-right: 20px;

    @media screen and (max-width: 500px){
        width: 12%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 12%;
    }
`

const FirstSection = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(true);
    }

    return (
        <HeadBox>
            <HamburgerMenu menu = {menu} setMenu = {setMenu} />
            <AnotherBox onClick = {() => handleClick()} >
                <StyledBox></StyledBox>
                <StyledBox></StyledBox>
                <StyledBox></StyledBox>
            </AnotherBox>
            <NewBox>
                <Image src={logo} alt="logo" />
                <Typo>Welcome to BloWeb.com </Typo> 
            </NewBox>
        </HeadBox>       
    )
}

export default FirstSection;