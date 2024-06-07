import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";

const NewBox = styled(Box)`
    width: 30%;
    text-align: center;
    margin-top: 15px;
    background-color: rgba(25, 118, 210, 0.2);
    padding-top: 35px;
    margin-left: 6%;
    margin-right: 20px;
    border-radius: 5px;

    @media screen and (max-width: 500px){
        width: 80%;
        margin: auto;
        padding-bottom: 2vh;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 40%;
    }
`

const Image = scStyled.img`
    height: 40vh;
    width: 25vw;
    border-radius: 10px;
    margin-bottom: 20px;

    @media screen and (max-width: 500px){
        height: 25vh;
        width: 60vw;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        height: 20vh;
        width: 30vw;
    }
`

const Typo = styled(Typography)`
    font-size: 17px;
    margin-top: 10px;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const UsernameTypo = styled(Typography)`
    display: inline;
    color: #1100ab;
    font-weight: bold;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 19px;
    }
`

const PrivacyTypo = styled(Typography)`
    display: inline;
    color: #1100ab;
    font-weight: bold;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 19px;
    }
`

const SecondSection = ({ blog }) =>{
    const { user } = useContext(UserContext);

    return (
        <NewBox>
            <Image src={blog.image} alt="blog-image" />
            <Typo>Author: <UsernameTypo><Link to={user.username === blog.user ? "/profile": `/author-profile/?username=${blog.user}`} style={{color: "inherit", textDecoration: "inherit"}}>{blog.user}</Link></UsernameTypo></Typo>
            <Typo>Accessibility: <PrivacyTypo>{blog.privacy}</PrivacyTypo></Typo>
        </NewBox>
    )
}

export default SecondSection;