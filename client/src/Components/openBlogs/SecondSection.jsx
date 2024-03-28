import React from "react";
import { Box, Typography, styled } from "@mui/material";

const NewBox = styled(Box)`
    width: 60%;
    background-color: rgba(25, 118, 210, 0.2);
    margin: 15px;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
`

const UsernameTypo = styled(Typography) `
    color: #1100ab;
    font-size: 30px;
    font-weight: bold;
    padding-left: 10%;
`

const TitleTypo = styled(Typography)`
    font-weight: bold;
    color: #1100ab;
    font-size: 18px;
    margin-top: 5vh;
    text-align: center;
    margin-bottom: 5vh;
`

const ContentTypo = styled(Typography)`
    width: 80%;
    text-align: justify;
    margin-left: 10%;
    margin-right: 10%;
`

const PrivateTypo = styled(Typography)`
    color: #1100ab;
    text-align: right;
    width: 90%;
    font-size: 17px;
    font-weight: bold;
`

const Typo = styled(Typography)`
    color: grey;
    display: inline;
    font-size: 17px;
`

const SecondSection = ({ blog }) =>{
    return (
        <NewBox>
            <UsernameTypo>{blog.user}</UsernameTypo>
            <PrivateTypo><Typo>Accessibility: </Typo>{blog.privacy}</PrivateTypo>
            <TitleTypo>{blog.title} </TitleTypo>
            <ContentTypo>{blog.content}</ContentTypo>
        </NewBox>
    )
}

export default SecondSection;