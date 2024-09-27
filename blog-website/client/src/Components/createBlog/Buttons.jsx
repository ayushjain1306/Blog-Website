import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import DialogBox from "./DialogBox.jsx";
import createBlog from "../../service/createBlog.js";
import uploadImage from "../../service/uploadImage.js";

const NewBox = styled(Box)`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    @media screen and (max-width: 500px){
        width: 80%;
    }
`

const NewButton = styled(Button)`
    width: 45%;
    font-weight: bold;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
    }
`

const Buttons = ({ inputData, fieldData, image, setFieldData }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleSave = async () => {
        if (fieldData.title === ""){
            document.getElementById("error1").innerText = "! This field cannot be empty";
            document.getElementById("error2").innerText = "";
            document.getElementById("error3").innerText = "";
            return;
        }
        else if (image === null){
            document.getElementById("error2").innerText = "! No image found";
            document.getElementById("error1").innerText = "";
            document.getElementById("error3").innerText = "";
            return;
        }
        else if (fieldData.content === ""){
            document.getElementById("error3").innerText = "! This field cannot be empty";
            document.getElementById("error1").innerText = "";
            document.getElementById("error2").innerText = "";
            return;
        }
        else if (fieldData.content.length < 500){
            document.getElementById("error3").innerText = "! Minimum 500 words required.";
            document.getElementById("error1").innerText = "";
            document.getElementById("error2").innerText = "";
            return;
        }
        else {
            document.getElementById("error1").innerText = "";
            document.getElementById("error2").innerText = "";
            document.getElementById("error3").innerText = "";
        }

        const data = new FormData();

        // data.append("name", fieldData.image.name);
        data.append("file", fieldData.image);

        document.getElementById("loader").style.display = "block";

        const response = await uploadImage(data);

        if (response){
            const blogData = {...fieldData, image: response};
            setFieldData({...fieldData, image: response});
            await createBlog(blogData);
        }

        document.getElementById("loader").style.display = "none";

    }

    const handleDiscard = () => {
        if (fieldData.title === "" && fieldData.content === "" && image === null){
            return;
        }
        else {
            setOpenDialog(true);
        }
    }

    return (
        <NewBox>
            <NewButton variant = "contained" color="warning" onClick = {() => handleSave()}>Save</NewButton>
            <NewButton variant = "contained" onClick = {() => handleDiscard()}>Discard</NewButton>

            {
                openDialog && <DialogBox openDialog = {openDialog} setOpenDialog = {setOpenDialog} />
            }
        </NewBox>
    )
}

export default Buttons;