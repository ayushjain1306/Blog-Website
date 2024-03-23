import React from "react";
import { Box, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";

const NewBox = styled(Box)`
    width: 35%;
    text-align: center;
    margin-top: 15px;
`

const Image = scStyled.img`
    height: 50vh;
    width: 30vw;
    border-radius: 10px;
`

const ThirdSection = ({ blog }) =>{
    return (
        <NewBox>
            <Image src={blog.image} alt="blog-image" />
        </NewBox>
    )
}

export default ThirdSection;