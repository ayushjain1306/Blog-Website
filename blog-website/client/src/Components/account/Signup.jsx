import React, { useState } from "react";
import { Box, Backdrop, CircularProgress, Button, TextField, styled } from "@mui/material";
import { handleClickSignin } from "./handleClick.js";
import Loader from "../../Loader.jsx";

const NewBox = styled(Box)`
    text-align: center;
`

const NewTextField = styled(TextField)`
    width: 40%;

    @media screen and (max-width: 500px){
        margin-top: 25px;
        width: 70%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 70%;
        margin-top: 1vh;
    }
`

const NewButton = styled(Button)`
    width: 40%;
    margin-top: 3.5vh;
    font-weight: bold;

    @media screen and (max-width: 500px){
        margin-top: 25px;
        width: 45%;
        font-size: 17px;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
        width: 50%;
        margin-top: 2vh;
    }
`

const AnotherBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 15px;

    @media screen and (max-width: 1100px){
        flex-direction: column;
        margin-top: 0px;
    }
`

const AnotherButton = styled(Button)`
    width: 40%;
    font-size: 12px;
    margin: 13px 0px;

    @media screen and (max-width: 500px){
        margin: 25px 0px;
        width: 45%;
    }    
    
    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 17px;
        width: 50%;
        margin-top: 2vh;
    }
`

const inputData = {
    name: "",
    email: "",
    username: "",
    password: ""
}

const Signup = ({ setAccount }) => {
    const [fieldData, setFieldData] = useState(inputData);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFieldData({ ...fieldData, [e.target.id]: e.target.value });
    }

    const handleChangeOption = () => {
        setAccount("login");
    }

    const handleClick = async () => {
        setLoading(true);
        await handleClickSignin(inputData, fieldData, setFieldData);
        setLoading(false);
    }

    return (
        <NewBox>
            <Backdrop open={loading} sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <AnotherBox>
                <NewTextField id="name" label="Enter your Name" required onChange={(e) => handleChange(e)} />
                <NewTextField id="email" label="Enter your Email address" required onChange={(e) => handleChange(e)} />
            </AnotherBox>

            <AnotherBox>
                <NewTextField id="username" label="Create your Username" required onChange={(e) => handleChange(e)} />
                <NewTextField id="password" type="password" label="Create your Password" required onChange={(e) => handleChange(e)} />
            </AnotherBox>

            <NewButton variant="contained" color="warning" onClick={() => handleClick()}>Sign Up</NewButton>
            <br />
            <AnotherButton variant="outlined" onClick={() => handleChangeOption()}>Already have an Account?</AnotherButton>
        </NewBox>
    )
}

export default Signup;