import React, { useState } from "react";
import { TextField, Dialog, DialogContentText, DialogContent, DialogActions, Button, styled } from "@mui/material";
import addDescription from "../../service/addDescription.js";

const NewButton = styled(Button)`
    color: #1100ab;
    font-weight: bold;
`

const NewTextField = styled(TextField)`
    width: 100%;
    margin-top: 15px;
`

const DialogContentTypo = styled(DialogContentText)`
    width: 30%;
    
    @media screen and (max-width: 500px){
        width: 100%;
    }
`

const DialogBox = ({ open, setOpen, description, token }) => {
    const [fieldData, setFieldData] = useState(description);

    const handleChange = (e) => {
        setFieldData(e.target.value);
    }

    const handleClick = async() => {
        if (fieldData === description){
            handleClose();
            return;
        }
        await addDescription(token, fieldData);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={() => handleClose()}>
            <DialogContent>
                <DialogContentTypo>
                    Make the changes in the given textfield.
                </DialogContentTypo>
                <NewTextField variant="standard" defaultValue={description} onChange={(e) => handleChange(e)} />
            </DialogContent>

            <DialogActions>
                <NewButton variant="standard" onClick={() => handleClose()}>Cancel</NewButton>
                <NewButton variant="standard" onClick={() => handleClick()}>Edit</NewButton>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox;