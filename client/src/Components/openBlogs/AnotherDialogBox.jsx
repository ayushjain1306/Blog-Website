import React from "react";
import { Button, styled, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from "@mui/material";
import deleteBlog from "../../service/deleteBlog.js";

const NewButton = styled(Button)`
    background-color: #1100ab;
    font-weight: bold;

    &: hover {
        background-color: #1100ab;
        opacity: 0.9;
    }
`

const AnotherDialogBox = ({ blog, openDialog, setOpenDialog }) => {
    const handleClose = () => {
        setOpenDialog(false);
    }

    return (
        <Dialog
            open={openDialog}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: async (event) => {
                    event.preventDefault();
                    await deleteBlog(blog);
                    handleClose();
                },
            }}
        >
            <DialogTitle id="responsive-dialog-title">
                Want to Discard?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This blog will get delete. Keep in mind, this step is irreversible.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <NewButton variant="contained" autoFocus onClick={handleClose}>
                    Cancel
                </NewButton>
                <NewButton variant="contained" type="submit" autoFocus>
                    Delete
                </NewButton>
            </DialogActions>
        </Dialog>
    )
}

export default AnotherDialogBox;