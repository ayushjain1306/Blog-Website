import React, { useState, useContext, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { UserContext } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Header from "../header/Header.jsx";
import getAuthorData from "../../service/getAuthorData.js";
import BlogSection from "./BlogSection.jsx";
import UserSection from "./UserSection.jsx";
import Cookies from "js-cookie";
import Footer from "../footer/Footer.jsx";

const NewBox = styled(Box)`
    background-color: #ebebe9;
    min-height: 100vh;
    padding-top: 12vh;
`

const AnotherBox = styled(Box)`
    font-size: 20px;
    background-color: #ebebe9;
    min-height: 90vh;
    margin-top: 10vh;
`

const AuthorProfile = () => {
    const [authorData, setAuthorData] = useState(null);
    const navigate = useNavigate();
    const { isUser } = useContext(UserContext);
    const token = Cookies.get("token");
    const [ searchParams ] = useSearchParams();
    const username = searchParams.get("username");

    const check = () => {
        if (!isUser){
            navigate('/login');
            return false;
        }

        return true;
    }

    useEffect(() => {
        const getData = async() => {
            const response = await getAuthorData(username, token);
            setAuthorData(response);
        }

        if (check()){
            getData();
        }
    }, []);

    return (
        check() &&
        <>
            <Header />
            {
                authorData ?
                <NewBox>
                    <UserSection authorData={authorData} />
                    <BlogSection authorData={authorData} />
                </NewBox>
                :
                <AnotherBox>
                    Failed to fetch Author's Data.
                </AnotherBox>
            }
            
            <Footer />
        </>
    )
}

export default AuthorProfile;