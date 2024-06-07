import React, { useState, useContext } from "react";
import { Box, TextField, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import send from "../openBlogs/images/send.png";
import addComment from "../../service/addComment.js";
import { UserContext } from "../../context/userContext.js";
import Cookies from "js-cookie";

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
    const { user } = useContext(UserContext);
    const token = Cookies.get("token");

    const handleChange = (e) => {
        setFieldData(e.target.value);
    }

    const handleClick = async() => {
        if (fieldData === ""){
            return;
        }

        const data = {
            username: user.username,
            blogId: blog._id,
            comment: fieldData,
            authorUsername: blog.user
        }

        await addComment(data, token);
    }

    return (
        <NewBox>
            <NewTextField variant="standard" type="text" placeholder="Add your comment" onChange={e => handleChange(e)} />
            <Image src={send} alt="send" onClick={() => handleClick()} />
        </NewBox>
    )
}

export default InputSection;