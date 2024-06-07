import React, { useContext } from "react";
import { Dialog, DialogContent, DialogContentText, DialogActions, Button, styled } from "@mui/material";
import Cookies from "js-cookie";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const NewButton = styled(Button)`
    color: #1100ab;
    font-weight: bold;
`

const DialogBox = ({ open, setOpen }) => {
    const navigate = useNavigate();
    const { setIsUser, setUser } = useContext(UserContext);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = () => {
        Cookies.remove("token");
        setIsUser(false);
        setUser(null);
        navigate('/login');
    }

    return (
        <Dialog open={open} onClose={() => handleClose()}>
            <DialogContent>
                <DialogContentText style={{color: "black"}}>
                    Are you sure you want to log out?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <NewButton variant="standard" onClick={() => handleClose()}>Cancel</NewButton>
                <NewButton variant="standard" onClick={() => handleClick()}>Log Out</NewButton>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox;