import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import logo from "./images/logo.png";

const NewBox = styled(Box)`
    width: 50%;
    border-radius: 5px;
    height: 66vh;
    margin: auto;
    background-color: whitesmoke;

    @media screen and (max-width: 500px){
        width: 100vw;
        height: 90vh;
        background-color: rgba(25, 118, 210, 0.2);
        padding-top: 10vh;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 70%;
    }
`
    
const Container = styled(Box)`
    min-height: 80vh;
    padding-top: 17vh;
    background-color: rgba(25, 118, 210, 0.3);

    @media screen and (max-width: 500px){
        padding-top: 0px;
        height: 100vh;
        background-color: white;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        height: 100vh;
    }
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