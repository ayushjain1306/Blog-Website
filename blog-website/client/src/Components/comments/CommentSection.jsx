import React from "react";
import { Box, Typography, styled } from "@mui/material";
import InputSection from "./InputSection.jsx";
import OutputSection from "./OutputSection.jsx";

const NewBox = styled(Box)`
    padding: 5vh 5vw;
    margin: 5vh 10vw 10vh 10vw;
    background-color: white;
    border-radius: 10px;
    
    @media screen and (max-width: 1100px){
        margin-left: 5vw;
        margin-right: 5vw;
        padding-top: 2.5vh;
        padding-bottom: 2.5vh;
    }
`

const Typo = styled(Typography)`
    font-size: 25px;

    @media screen and (max-width: 500px){
        font-size: 20px;
    }
`

const CommentsSection = ({ blog }) => {
    return (
        <NewBox>
            <Typo>
                Comments
            </Typo>

            <InputSection blog={blog} />
            <OutputSection />
        </NewBox>
    )
}

export default CommentsSection;