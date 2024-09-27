import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import logo from "./images/logo.png";

const NewBox = styled(Box)`
    width: 50%;
    border-radius: 3px;
    height: 62vh;
    margin: auto;
    box-shadow: 8px 8px 8px -3px rgb(0, 0, 0, 0.2);
    background-color: white;

    @media screen and (max-width: 500px){
        width: 85%;
        height: 72vh;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 70%;
    }
`
    
const Container = styled(Box)`
    height: 100vh;
    background-color: #ebebe9;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AnotherBox = styled(Box)`
    padding-top: 5vh;
    padding-bottom: 2.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-size: 25px;
    font-weight: bold;

    @media screen and (max-width: 500px){
        font-size: 30px;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 35px;
    }
`

const Image = scStyled.img`
    width: 7%;
    margin-right: 15px;

    @media screen and (max-width: 500px){
        width: 14%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 15%;
    }
`

const Account = () => {
    const [account, setAccount] = useState("login");

    return (
        <Container>
            <NewBox>
                <AnotherBox>
                    <Image src={logo} alt="logo" />
                    <Typo>BloWeb</Typo>
                </AnotherBox>

                {
                    account === "login" 
                    ? <Login setAccount = {setAccount} /> 
                    : <Signup setAccount = {setAccount} />
                }
            </NewBox>
        </Container>
    )
}

export default Account;