import React from "react";
import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewBox = styled(Box)`
    margin-top: 3vh;
    text-align: right;
    padding-right: 10vw;

    @media screen and (max-width: 500px){
        text-align: center;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 25px;
        margin-top: 5vh
    }
`

const NewButton = styled(Button)`
    background-color: #1100ab;
    font-weight: bold;

    &:hover {
        background-color: #1100ab;
        opacity: 0.9;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const CreateButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create-blog');
    }

    return (
        <NewBox>
            <NewButton variant="contained" onClick={() => handleClick()}>Create New Blog</NewButton>
        </NewBox>
    )
}

export default CreateButton;