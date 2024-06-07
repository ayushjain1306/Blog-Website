import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import userImage from "../header/images/user.png";

const NewBox = styled(Box)`
    margin-top: 2vh;
`

const AnotherBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3vh;
`

const DescriptionBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledBox = styled(Box)`

`

const Image = scStyled.img`
    width: 100px;
    height: 100px;
    margin-right: 20px;
`

const Typo = styled(Typography)`
    font-size: 30px;
`

const AnotherTypo = styled(Typography)`
    font-size: 20px;
    color: #1100ab;
    font-weight: bold;
`

const DescriptionTypo = styled(Typography)`
    font-size: 17px;
    color: grey;
    width: 30%;
    margin: auto;
    text-align: center;

    @media screen and (max-width: 500px){
        width: 80%;
    }
`

const UserSection = ({ authorData }) => {
    return (
        <NewBox>
            <AnotherBox>
                <Image src={userImage} />
                <StyledBox>
                    <Typo>{authorData.name}</Typo>
                    <AnotherTypo>@{authorData.username}</AnotherTypo>
                </StyledBox>
            </AnotherBox>
            
            {
                authorData.description &&
                <DescriptionBox>
                    <DescriptionTypo>{authorData.description}</DescriptionTypo>
                </DescriptionBox>
            }
        </NewBox>
    )
}

export default UserSection;