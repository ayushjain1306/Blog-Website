import React, { useState } from "react";
import { Box, TextField, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import send from "./images/send.png";
import addComment from "../../service/addComment.js";

const NewBox = styled(Box)`
    margin-top: 25px;
    margin-bottom: 15px;
    display: grid;
    place-items: center;
    grid-template-columns: 90% 10%;
`

const NewTextField = styled(TextField)`
    width: 100%;
    font-size: 20px;
`

const Image = scStyled.img`
    height: 27px;
    width: 27px;
    cursor: pointer;
`

const InputSection = ({ blog }) => {
    const [fieldData, setFieldData] = useState("");

    const token = localStorage.getItem("token");

    const [header, payload, signature] = token.split(".");

    const decodedPayload = JSON.parse(atob(payload));

    const username = "";

    if (header && signature){
        username = decodedPayload.username;
    }

    const handleChange = (e) => {
        setFieldData(e.target.value);
    }

    const handleClick = async() => {
        if (fieldData === ""){
            return;
        }

        const data = {
            username,
            blogId: blog._id,
            comment: fieldData
        }

        await addComment(data);
    }

    return (
        <NewBox>
            <NewTextField variant="standard" type="text" placeholder="Add your comment" onChange={e => handleChange(e)} />
            <Image src={send} alt="send" onClick={() => handleClick()} />
        </NewBox>
    )
}

export default InputSection;