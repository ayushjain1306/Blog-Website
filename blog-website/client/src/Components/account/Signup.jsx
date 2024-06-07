import React, { useState } from "react";
import { Box, Typography, Button, TextField, styled } from "@mui/material";
import { handleClickSignin } from "./handleClick.js";
import Loader from "../../Loader.jsx";

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
    width: 30%;
    margin-top: 3.5vh;
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

const inputData = {
    name: "",
    email: "",
    username: "",
    password: ""
}

const Signup = ({ setAccount }) =>{
    const [fieldData, setFieldData] = useState(inputData);

    const handleChange = (e) => {
        setFieldData({...fieldData, [e.target.id]: e.target.value});
    }

    const handleChangeOption = () => {
        setAccount("login");
    }

    return (
        <NewBox>
            <Loader />
            <Typo>
                Create your Account
            </Typo>

            <AnotherBox>
                <NewTextField id = "name" label = "Enter your Name" required onChange = {(e) => handleChange(e)} />
                <NewTextField id = "email" label = "Enter your Email address" required onChange = {(e) => handleChange(e)} />
            </AnotherBox>

            <AnotherBox>
                <NewTextField id = "username" label = "Create your Username" required onChange = {(e) => handleChange(e)} />
                <NewTextField id = "password" type = "password" label = "Create your Password" required onChange = {(e) => handleChange(e)} />
            </AnotherBox>

            <NewButton variant = "contained" onClick = {() => handleClickSignin(inputData, fieldData, setFieldData)}>Sign Up</NewButton>
            <br />
            <AnotherButton onClick = {() => handleChangeOption()}>Already have an Account?</AnotherButton>
        </NewBox>
    ) 
}

export default Signup;