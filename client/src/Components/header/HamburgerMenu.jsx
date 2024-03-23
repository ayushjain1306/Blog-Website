import React from "react";
import { Box, Button, styled } from "@mui/material";
import MenuItems from "./MenuItems.jsx";
import Cookies from "js-cookie";

const NewBox = styled(Box)`
    padding-top: 30px;
    width: 25vw;
    height: 100vw;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CrossBox = styled(Box)`
    margin: 30px 0px;
`

const Cross = styled(Box)`
    width: 30px;
    border: 2px solid #620aa0;
    position: absolute;
    top: 30px;
    left: 30px; 
    border-radius: 10px;
    background-color: #620aa0;
    cursor: pointer;
`

const UserBox = styled(Box)`
    width: 50%;
    background-color: #620aa0;
    border-radius: 3px;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    font-size: 17px;
`

const ButtonBox = styled(Box)`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NewButton = styled(Button)`
    width: 40%;
    color: #620aa0;
    font-weight: bold;
`

const HamburgerMenu = ({ menu, setMenu }) => {
    const token = Cookies.get("token");

    const [header, payload, signature] = token ? token.split(".") : "";

    const decodedPayload = token ? JSON.parse(atob(payload)): "";

    const handleClick = () => {
        setMenu(false);
    }

    const handleClickLog = () => {
        document.getElementById("loader").style.display = "block";
        localStorage.removeItem("token");
        document.getElementById("loader").style.display = "none";
        window.location.reload();
    }

    return (
        menu && header && signature &&

        <NewBox>
            <CrossBox>
                <Cross onClick = {() => handleClick()} style = {{transform: "rotate(45deg)"}}></Cross>
                <Cross onClick = {() => handleClick()} style = {{transform: "rotate(-45deg)"}}></Cross>
            </CrossBox>
            <UserBox>
                {decodedPayload.username}
            </UserBox>
            <ButtonBox>
                <NewButton onClick={() => handleClick()}>Home</NewButton>
                <NewButton onClick={() => handleClickLog()}>Log Out</NewButton>
            </ButtonBox>

            <MenuItems />
        </NewBox>

    )
}

export default HamburgerMenu;