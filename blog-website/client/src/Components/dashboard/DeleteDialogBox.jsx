import React, { useContext } from  "react";
import { Button, Dialog, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { UserContext } from "../../context/userContext.js";
import deleteAccount from "../../service/deleteAccount.js";
import Cookies from "js-cookie";

const DeleteDialogBox = ({ open, setOpen }) => {
    const { user } = useContext(UserContext);
    const token = Cookies.get("token");

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = async() => {
        await deleteAccount(user.username, token);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}    
        >
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete your account? You will lose everything and this is irreversible task.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => handleClose()}>Cancel</Button>
                <Button variant="contained" color="error" onClick={() => handleClick()}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteDialogBox;