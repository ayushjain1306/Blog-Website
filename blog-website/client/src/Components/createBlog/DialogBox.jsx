import React from "react";
import { Button, styled, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from "@mui/material";

const NewButton = styled(Button)`
    font-weight: bold;
`

const DialogBox = ({ openDialog, setOpenDialog }) => {
    const handleClose = () => {
        setOpenDialog(false);
    }

    const handleClick = () => {
        setOpenDialog(false);
        window.location.reload();
    }

    return (
        <Dialog
            open = {openDialog} 
            onClose = {handleClose}
            aria-labelledby = "responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Want to Discard?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You will lose everything. Keep in mind, this step is irreversible.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <NewButton variant = "contained" autoFocus onClick={handleClose}>
                    Cancel
                </NewButton>
                <NewButton variant = "contained" color="error" onClick={handleClick} autoFocus>
                    Discard
                </NewButton>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox;