import React from "react";
import { Box, Typography, styled } from "@mui/material";

const NewBox = styled(Box)`
    width: 60%;
    margin: 15px;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 15px;

    @media screen and (max-width: 500px){
        width: 80%;
        margin: auto;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 50%;
    }
`

const TitleTypo = styled(Typography)`
    font-weight: bold;
    color: #1100ab;
    font-size: 25px;
    margin-top: 5vh;
    text-align: center;
    margin-bottom: 5vh;

    @media screen and (max-width: 500px){
        font-size: 22px;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 22px;
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
`

const ContentTypo = styled(Typography)`
    width: 100%;
    text-align: justify;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 18px;
    }
`

const ThirdSection = ({ blog }) =>{
    return (
        <NewBox>
            <TitleTypo>{blog.title} </TitleTypo>
            <ContentTypo>{blog.content}</ContentTypo>
        </NewBox>
    )
}

export default ThirdSection;