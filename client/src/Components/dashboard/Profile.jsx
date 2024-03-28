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
    padding-top: 14vh;
    width: 80vw;
`

const NewTextField = styled(TextField)`
    width: 50%;
`

const NewButton = styled(Button)`
    color: #1100ab;
    font-weight: bold;
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
`

const Image = scStyled.img`
    height: 10vh;
    width: 5vw;
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-size: 30px;
    margin-left: 20px;
`

const Description = styled(Typography)`
    text-align: center;
    padding-top: 4vh;
`

const AnotherDescriptionBox = styled(Box)`
    text-align: center;   
`

const DescriptionTypo = styled(Typography)`
    color: grey;
    width: 50%;
    margin: auto;
    padding-bottom: 20px;
`

const StyledBox = styled(Box)`
    padding-left: 8vw;
    margin-top: 5vh;
`

const AnotherTypo = styled(Box)`
    font-size: 18px;
    font-weight: bold;
`

const HeadTypo = styled(Typography)`
    font-size: 25px;
`

const InsideBox = styled(Box)`
    margin-top: 20px;
`

const StyledTypo = styled(Typography)`
    color: #1100ab;
    font-weight: inherit;
    display: inline;
    margin-left: 80px;
`

const Profile = () => {
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
                <AnotherTypo>Total Number of Blogs:- {blogs.length}</AnotherTypo>
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

export default Profile;