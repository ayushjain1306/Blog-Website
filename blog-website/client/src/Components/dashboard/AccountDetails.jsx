import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import { useSelector } from "react-redux";
import userImage from "../header/images/user.png";
import { UserContext } from "../../context/userContext";
import Cookies from "js-cookie";
import { getAccountDetails } from "../../service/accountWork";
import addDescription from "../../service/addDescription";
import DialogBox from "./DialogBox.jsx";

const NewBox = styled(Box)`
    padding-top: 4vh;
    width: 100%;
`

const NewTextField = styled(TextField)`
    width: 30%;

    @media screen and (max-width: 500px){
        width: 50%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 35%;
    }
`

const NewButton = styled(Button)`
    color: #1100ab;
    font-weight: bold;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 18px;
    }
`

const DescriptionBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const AnotherBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px){
        display: block;
        text-align: center;
    }
`

const Image = scStyled.img`
    height: 10vh;
    width: 5vw;

    @media screen and (max-width: 500px){
        height: 10vh;
        width: 22vw;
    }
    
    @media screen and (min-width: 500px) and (max-width: 1100px){
        height: 9vh;
        width: 12vw;
    }
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-size: 30px;
    margin-left: 20px;

    @media screen and (max-width: 500px){
        font-size: 24px;
        margin-left: 0px;
    }
`

const Description = styled(Typography)`
    padding-top: 4vh;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        padding-top: 2vh;
    }
`

const AnotherDescriptionBox = styled(Box)`
    text-align: center;   
`

const DescriptionTypo = styled(Typography)`
    color: grey;
    width: 50%;
    margin: auto;
    padding-bottom: 20px;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const StyledBox = styled(Box)`
    width: 60%;
    margin: 0px 20%;
    margin-top: 5vh;

    @media screen and (max-width: 500px){
        margin-left: 5%;
        margin-right: 5%;
        width: 90%;
    }
`

const AnotherTypo = styled(Box)`
    font-size: 18px;
    font-weight: bold;

    @media screen and (max-width: 500px){
        width: 100%;
        font-size: 14px;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const HeadTypo = styled(Typography)`
    font-size: 25px;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 28px;
    }
`

const InsideBox = styled(Box)`
    margin-top: 20px;

    @media screen and (max-width: 500px){
        width: 100%;
    }
`

const StyledTypo = styled(Typography)`
    color: #1100ab;
    font-weight: inherit;
    display: inline;
    margin-left: 80px;

    @media screen and (max-width: 500px){
        width: 100%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const AccountDetails = () => {
    const [fieldData, setFieldData] = useState("");
    const [accountDetails, setAccountDetails] = useState(null);
    const [open, setOpen] = useState(false);
    const { user } = useContext(UserContext);
    const { blogs } = useSelector(state => state.getBlogs);
    const token = Cookies.get("token");

    const handleChange = (e) => {
        setFieldData(e.target.value);
    }

    const handleClick = async() => {
        if (fieldData === ""){
            return;
        }
        
        await addDescription(token, fieldData);
    }

    const handleClickEdit = () => {
        setOpen(true);
    }

    const getData = async() => {
        const response = await getAccountDetails(token);

        setAccountDetails(response);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        blogs &&
        <NewBox>
            <AnotherBox>
                <Image src={userImage} alt='user' />
                <Typo>{user.username}</Typo>
            </AnotherBox>

            <Description>
                {
                    accountDetails && accountDetails[0].description ?
                    <AnotherDescriptionBox>
                        <DescriptionTypo>{accountDetails[0].description}</DescriptionTypo>
                        <NewButton variant="outlined" onClick={()=>handleClickEdit()}>Edit</NewButton>
                    </AnotherDescriptionBox>:
                    <DescriptionBox>
                        <NewTextField variant="standard" placeholder="Add your description" onChange={(e)=>handleChange(e)} />
                        <NewButton variant="standard" onClick={()=>handleClick()}>Add</NewButton>
                    </DescriptionBox>
                }
            </Description>

            <StyledBox>
                <AnotherTypo>Total Number of Blogs:- {blogs ? blogs.length : 0}</AnotherTypo>
            </StyledBox>

            {
                accountDetails &&
                <StyledBox>
                    <HeadTypo>Your Account Details</HeadTypo>

                    <InsideBox>
                        <AnotherTypo>Your name: <StyledTypo>{accountDetails[0].name}</StyledTypo></AnotherTypo>                   
                        <AnotherTypo>Your username: <StyledTypo style={{marginLeft: "43px"}}>{accountDetails[0].username}</StyledTypo></AnotherTypo>                   
                        <AnotherTypo>Your email: <StyledTypo>{accountDetails[0].email}</StyledTypo></AnotherTypo>                   
                    </InsideBox>
                </StyledBox>
            }

            {
                open && <DialogBox open={open} setOpen={setOpen} token={token} description={accountDetails[0].description} />
            }

        </NewBox>
    )
}

export default AccountDetails;