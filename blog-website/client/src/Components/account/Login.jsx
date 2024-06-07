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
    margin-top: 1vh;

    @media screen and (max-width: 500px){
        font-size: 18px;
        margin-top: 1.5vh;
        margin-bottom: 1.5vh;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }
`

const NewTextField = styled(TextField)`
    margin-top: 15px;
    width: 50%;

    @media screen and (max-width: 500px){
        width: 70%;
        margin-top: 25px;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 70%;
    }
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

const AnotherButton = styled(Button)`
    width: 40%;
    text-decoration: underline;
    font-size: 12px;
    margin: 13px 0px;
    color: #1100ab;

    &:hover {
        background-color: whitesmoke;
        text-decoration: underline;
    }

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

const StyledBox = styled(Box)`
    padding-top: 1vh;
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
        const response = await handleClickLogin(inputData, fieldData, setFieldData);

        if (response){
            const { token } = response;
            
            Cookies.set("token", token, {expires: 3600000});

            const [header, payload, signature] = token.split('.');

            const decodedPayload = JSON.parse(atob(payload));

            if (!header || !signature) return;

            setIsUser(true);
            setUser(decodedPayload);
            
            navigate("/");
        }
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

            <StyledBox>
                <NewButton variant = "contained" onClick = {() => handleClick()}>Log In</NewButton>
                <br />
                <AnotherButton onClick = {() => handleChangeOption()}>Don't have an Account? Create Account</AnotherButton>
            </StyledBox>
        </NewBox>
    ) 
}

export default Login;