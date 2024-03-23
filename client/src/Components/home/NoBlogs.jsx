import React from "react";
import { Box, Typography, styled, Button } from "@mui/material";

const NewBox = styled(Box)`
    margin-top: 100px;
`

const Typo = styled(Box)`

`

const NoBlogs = () => {
    return (
        <NewBox>
            <Typo>Hello World</Typo>
        </NewBox>
    )
}

export default NoBlogs;