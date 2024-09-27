import React from "react";
import { Box, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";

const NewBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = scStyled.img`
    width: 50vw;
    height: 60vh;
    border-radius: 3px;

    @media screen and (max-width: 500px){
        width: 75vw;
        height: 30vh;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 60vw;
        height: 40vh;
    }
`

const FirstSection = ({ image }) =>{
    return (
        <NewBox>
            <Image src={image} alt="no-image" />
        </NewBox>
    )
}

export default FirstSection;