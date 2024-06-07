import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import DialogBox from "./DialogBox.jsx";
import AnotherDialogBox from "./AnotherDialogBox.jsx";

const NewBox = styled(Box)`
    margin: 0px 15px 15px 15px;
    border-radius: 5px;
    text-align: right;
    padding-right: 20px;
`

const NewButton = styled(Button)`
    background-color: #1100ab;
    width: 8%;
    font-weight: bold;
    margin: 20px;

    &: hover {
        background-color: #1100ab;
        opacity: 0.9;
    } 

    @media screen and (max-width: 500px){
        font-size: 17px;
        width: 25%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
        width: 12%;
    }
`

const FirstSection = ({ blog }) =>{
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleEdit = () => {
        setOpen(true)
    }

    const handleDelete = () => {
        setOpenDialog(true);
    }

    return (
        <NewBox>
            <NewButton variant = "contained" onClick={() => handleEdit()}>Edit</NewButton>
            <NewButton variant = "contained" onClick={() => handleDelete()}>Delete</NewButton>

            {
                open &&
                <DialogBox open={open} setOpen={setOpen} blog={blog} />
            }

            {
                openDialog &&
                <AnotherDialogBox blog={blog} openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }
        </NewBox>
    )
}

export default FirstSection;