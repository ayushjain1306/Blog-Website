import React, { useEffect, useContext } from "react";
import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../header/Header.jsx";
import { UserContext } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar.jsx";

const NewBox = styled(Box)`
    background-color: rgb(0 150 136 / 15%);
    min-height: 100vh;
    padding-bottom: 10vh;
    display: flex;
`

const Dashboard = () => {
    const navigate = useNavigate();
    const { isUser } = useContext(UserContext);

    const check = () => {
        if (!isUser){
            navigate("/login");
            return false;
        }

        return true;
    }

    useEffect(() => {
        check();
    }, []);

    return (
        check() &&
        <NewBox>
            <Header />
            <SideBar />
            <Outlet />
        </NewBox>
    )
}

export default Dashboard;