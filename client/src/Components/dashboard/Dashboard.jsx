import React, { useEffect, useContext } from "react";
import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../header/Header.jsx";
import { UserContext } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar.jsx";
import extractBlogs from "../../redux/actions/extractBlogs.js";

const NewBox = styled(Box)`
    background-color: rgb(0 150 136 / 15%);
    min-height: 100vh;
    padding-bottom: 10vh;
    display: flex;
`

const Dashboard = () => {
    const navigate = useNavigate();
    const { isUser } = useContext(UserContext);
    const dispatch = useDispatch();

    const check = () => {
        if (!isUser){
            navigate("/login");
            return false;
        }

        return true;
    }

    useEffect(() => {
        if (check()){
            dispatch(extractBlogs());
        }
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