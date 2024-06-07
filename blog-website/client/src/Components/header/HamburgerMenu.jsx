import React, { useContext } from "react";
import { Box, Button, styled } from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";

const NewBox = styled(Box)`
    padding-top: 30px;
    width: 75vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CrossBox = styled(Box)`
    margin: 3vh 0px;
`

const Cross = styled(Box)`
    width: 30px;
    border: 2px solid #1100ab;
    position: absolute;
    top: 4.5vh;
    left: 30px; 
    border-radius: 10px;
    background-color: #1100ab;
    cursor: pointer;
`

const UserBox = styled(Box)`
    width: 50%;
    background-color: #1100ab;
    border-radius: 3px;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    font-size: 17px;
    margin-top: 3vh;
    margin-bottom: 3vh;
`

const NewButton = styled(Button)`
    width: 60%;
    color: #1100ab;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 2vh;
`

const HamburgerMenu = ({ menu, setMenu }) => {
    const { setIsUser, setUser, user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setMenu(false);
    }

    const handleClickLog = () => {
        // document.getElementById("loader").style.display = "block";
        Cookies.remove("token");
        setIsUser(false);
        setUser(null);
        // document.getElementById("loader").style.display = "none";
        window.location.reload();
    }

    const handleClickProfile = () => {
        navigate("/profile");        
    }

    return (
        menu &&

        <NewBox>
            <CrossBox onClick={() => handleClick()}>
                <Cross style = {{transform: "rotate(45deg)"}}></Cross>
                <Cross style = {{transform: "rotate(-45deg)"}}></Cross>
            </CrossBox>
            <UserBox>{user.username}</UserBox>
            <NewButton onClick={() => handleClick()}>Home</NewButton>
            <NewButton onClick={()=> handleClickProfile()}>Your Profile</NewButton>
            <NewButton onClick={() => handleClickLog()}>Log Out</NewButton>
        </NewBox>

    )
}

export default HamburgerMenu;