import React, { useState, useContext } from "react";
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { handleClickLogin } from "./handleClick.js";
import { UserContext } from "../../context/userContext.js";
import Loader from "../../Loader.jsx";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const NewBox = styled(Box)`
    text-align: center;
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-weight: bold;
`

const NewTextField = styled(TextField)`
    margin-top: 15px;
    width: 50%;
`

const NewButton = styled(Button)`
    width: 30%;
    margin-top: 15px;
    font-weight: bold;
    background-color: #1100ab;

    &:hover {
        background-color: #1100ab;
        opacity: 0.9;
    }
`

const AnotherButton = styled(Button)`
    width: 40%;
    text-decoration: underline;
    font-size: 12px;
    margin: 13px 0px;
    color: #1100ab;

    &:hover {
        background-color: white;
        text-decoration: underline;
    }
`

const inputData = {
    username: "",
    password: ""
}

const Login = ({ setAccount }) =>{
    const [fieldData, setFieldData] = useState(inputData);
    const { setIsUser, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFieldData({...fieldData, [e.target.id]: e.target.value})
    }

    const handleChangeOption = () => {
        setAccount("signup");
    }

    const handleClick = async() => {
        const { token } = await handleClickLogin(inputData, fieldData, setFieldData);

        Cookies.set("token", token, {expires: 3600000});

        const [header, payload, signature] = token.split('.');

        const decodedPayload = JSON.parse(atob(payload));

        if (!header || !signature) return;

        setIsUser(true);
        setUser(decodedPayload);
        
        navigate("/");
    }

    return (
        <NewBox>
            <Loader />
            <Typo>
                Fill your login details!
            </Typo>

            <Box>
                <NewTextField required id = "username" label = "Enter your Username" onChange = {(e) => handleChange(e)} />
                <br />
                <NewTextField required id = "password" type = "password" label = "Enter your Password" onChange = {(e) => handleChange(e)} />
            </Box>

            <Box>
                <NewButton variant = "contained" onClick = {() => handleClick()}>Log In</NewButton>
                <br />
                <AnotherButton onClick = {() => handleChangeOption()}>Don't have an Account? Create Account</AnotherButton>
            </Box>
        </NewBox>
    ) 
}

export default Login;