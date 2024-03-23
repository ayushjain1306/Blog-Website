import React from "react";
import { Box, Typography, styled } from "@mui/material";
import InputSection from "./InputSection.jsx";
import OutputSection from "./OutputSection.jsx";

const NewBox = styled(Box)`
    padding: 5vh 5vw;
    margin: 5vh 10vw 10vh 10vw;
    background-color: #e3e3e3;
    border-radius: 10px;
`

const Typo = styled(Typography)`
    font-size: 25px;
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