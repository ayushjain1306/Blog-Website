import React from "react";
import { Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";

const Typo = styled(Typography)`
    color: #1100ab;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const Foot = scStyled.footer`
    height: 12vh;
    text-align: center;
    background-color: rgb(0 150 136 / 15%);

    @media screen and (min-width: 500px) and (max-width: 1100px){
        height: 8vh;
    }
`

const Hr = scStyled.hr`
    margin-bottom: 4vh;
    border: 1px solid #1100ab;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 0px;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        margin-bottom: 2.5vh;
    }
`

const Footer = () => {
    return (
        <Foot>
            <Hr />
            <Typo>Created by Ayush Jain.</Typo>
        </Foot>
    )
}

export default Footer;