import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import logo from "./images/logo.png";

const NewBox = styled(Box)`
    width: 50%;
    border-radius: 5px;
    height: 60vh;
    margin: auto;
    background-color: white;
    box-shadow: 9px 9px 10px 0px #1100ab;
`

const Container = styled(Box)`
    min-height: 80vh;
    padding-top: 20vh;
    background-color: whitesmoke;
`

const AnotherBox = styled(Box)`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-size: 25px;
    font-weight: bold;
`

const Image = scStyled.img`
    width: 7%;
    margin-right: 15px;
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