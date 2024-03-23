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
    width: 60vw;
    height: 60vh;
`

const FirstSection = ({ image }) =>{
    return (
        <NewBox>
            <Image src={image} alt="no-image" />
        </NewBox>
    )
}

export default FirstSection;