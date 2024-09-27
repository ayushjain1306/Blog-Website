import React, { useState, useContext } from "react";
import { Box, Backdrop, CircularProgress, TextField, Button, styled } from "@mui/material";
import { handleClickLogin } from "./handleClick.js";
import { UserContext } from "../../context/userContext.js";
import Loader from "../../Loader.jsx";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const NewBox = styled(Box)`
    text-align: center;
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
    width: 40%;
    margin-top: 15px;
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
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFieldData({...fieldData, [e.target.id]: e.target.value})
    }

    const handleChangeOption = () => {
        setAccount("signup");
    }

    const handleClick = async() => {
        setLoading(true);
        const response = await handleClickLogin(inputData, fieldData, setFieldData);
        setLoading(false);

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
            <Backdrop open={loading} sx={(theme) => ({color: "#fff", zIndex: theme.zIndex.drawer + 1})}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <Box>
                <NewTextField required id = "username" label = "Enter your Username" onChange = {(e) => handleChange(e)} />
                <br />
                <NewTextField required id = "password" type = "password" label = "Enter your Password" onChange = {(e) => handleChange(e)} />
            </Box>

            <StyledBox>
                <NewButton variant = "contained" color="warning" onClick = {() => handleClick()}>Log In</NewButton>
                <br />
                <AnotherButton variant = "outlined" onClick = {() => handleChangeOption()}>Don't have an Account?</AnotherButton>
            </StyledBox>
        </NewBox>
    ) 
}

export default Login;