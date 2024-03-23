import React, { useContext } from 'react';
import { Box, Button, List, ListItem, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/userContext';
import Cookies from "js-cookie";

const NewBox = styled(Box)`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NewList = styled(List)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const ListItems = styled(ListItem)`
    list-style: none;
    width: 15%;
    font-weight: bold;
`

const NewButton = styled(Button)`
    width: 21%;
    font-weight: bold;
    background-color: whitesmoke;
    color: #1100ab;

    &:hover {
        background-color: white;
    }
`

const NewLink = styled(Link)`
    color: white;
    text-decoration: none;
`

const SecondSection = () => {
    const { setIsUser, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClick = () => {
        document.getElementById("loader").style.display = "block";
    
        setIsUser(false);
        setUser(null);

        Cookies.remove('token');
        navigate("/login");

        document.getElementById("loader").style.display = "none";
    }

    return (
        <NewBox>
            <NewList>
                <ListItems><NewLink to ="/">Home</NewLink></ListItems>
                <NewButton variant = "contained" onClick = {() => handleClick()}>
                    Log Out
                </NewButton>
            </NewList>
        </NewBox>
    )
}

export default SecondSection;