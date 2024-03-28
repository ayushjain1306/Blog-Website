import React, { useState } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, styled } from "@mui/material";
import Cookies from "js-cookie";
import editComment from "../../service/editComment.js";
import deleteComment from "../../service/deleteComment.js";

const NewButton = styled(Button)`
    color: #1100ab;
    font-weight: bold;
`

const NewTextField = styled(TextField)`
    width: 100%;
`

const DialogBoxEdit = ({ open, setOpen, comment }) => {
    const [fieldData, setFieldData] = useState(comment.comment)
    const token = Cookies.get("token");

    const handleEdit = async() => {
        if (comment.comment === fieldData){
            return;
        }        
        
        await editComment({...comment, comment: fieldData}, token);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        setFieldData(e.target.value);
    }

    return (
        <Dialog open={open} onClose={() => handleClose()}>
            <DialogTitle>
                Make the changes in the given textfield.
            </DialogTitle>

            <DialogContent>
                <NewTextField variant="standard" defaultValue={comment.comment} onChange={(e) => handleChange(e)} />
            </DialogContent>


            <DialogActions>
                <NewButton variant="standard" onClick={() => handleClose()}>Cancel</NewButton>
                <NewButton variant="standard" onClick={() => handleEdit()}>Edit</NewButton>
            </DialogActions>
        </Dialog>
    )
}

const DialogBoxDelete = ({ open, setOpen, comment }) => {
    const token = Cookies.get("token");

    const handleClose = () => {
        setOpen(false);
    } 

    const handleDelete = async() => {
        await deleteComment(comment._id, token);
    }

    return (
        <Dialog open={open} onClose={() => handleClose()}>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to remove this comment?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <NewButton variant="standard" onClick={() => handleClose()}>Cancel</NewButton>
                <NewButton variant="standard" onClick={() => handleDelete()}>Delete</NewButton>
            </DialogActions>
        </Dialog>
    )
}

export { DialogBoxEdit, DialogBoxDelete };