import React, { useEffect, useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar.jsx";
import Header from "../header/Header.jsx";
import Blogs from "./Blogs.jsx";
import AccountDetails from "./AccountDetails.jsx";
import Footer from "../footer/Footer.jsx";
import { UserContext } from "../../context/userContext.js";
import extractBlogs from "../../redux/actions/extractBlogs.js";

const NewBox = styled(Box)`
    background-color: rgb(0 150 136 / 15%);
    min-height: 100vh;
`

const Profile = () => {
    const { isUser } = useContext(UserContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const check = () => {
        if (isUser){
            return true;
        }

        navigate('/login');
        return false;
    }

    useEffect(() => {
        if (check()){
            dispatch(extractBlogs());
        }
    }, []);

    const { blogs } = useSelector(state => state.getBlogs);

    return (
        check() && 
        <NewBox>
            <Box style={{minHeight: "90vh"}}>
                <Header />
                <SideBar />
                <AccountDetails />
                {blogs && <Blogs blogs={blogs} />}
            </Box>
            <Footer />
        </NewBox>
    )
}

export default Profile;