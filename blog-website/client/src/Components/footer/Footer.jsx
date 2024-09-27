import React from "react";
import { Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";

const Typo = styled(Typography)`
    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const Foot = scStyled.footer`
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebebe9;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        height: 8vh;
    }
`

const Footer = () => {
    return (
        <Foot>
            <Typo>Created by Ayush Jain.</Typo>
        </Foot>
    )
}

export default Footer;