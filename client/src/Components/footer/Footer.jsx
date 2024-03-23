import React from "react";
import { Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";

const Typo = styled(Typography)`
    color: #1100ab;
`

const Foot = scStyled.footer`
    height: 12vh;
    text-align: center;
`

const Hr = scStyled.hr`
    margin-bottom: 4vh;
    border: 1px solid #1100ab;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
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