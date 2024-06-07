import React, { useState } from "react";
import { Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText, Button, TextField, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import editBlog from "../../service/editBlog.js";

const NewTextField = styled(TextField)`
    margin-top: 20px;
`

const Select = scStyled.select`
    width: 50%;
    background-color: white;
    margin-top: 20px;
    font-size: 1rem;
    border-radius: 4px;
    border-color: rgba(0, 0, 0, 0.23);
    padding: 16.5px 14px;
    color: rgba(0, 0, 0, 0.7);

    &: hover {
        border-color: black;
    }
`

const categories = [
    'Music',
    'Sports',
    'Creativity',
    'Literature',
    'Food & Recipes',
    'Health and Wellness',
    'Travel'
]


const DialogBox = ({ open, setOpen, blog }) => {
    const [checkChanges, setChanges] = useState(false);
    const [fieldData, setFieldData] = useState(blog); 

    const handleChange = (e) => {
        setChanges(true);
        setFieldData({...fieldData, [e.target.id]: e.target.value})
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: async(event) => {
                    event.preventDefault();
                    if (!checkChanges){
                        alert("No changes are made.");
                    }
                    else {
                        await editBlog(fieldData);
                    }
                    handleClose();
                },
            }}
        >
            <DialogTitle>Edit your blog</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You can make the changes in the textfields given below. (* represents required).
                </DialogContentText>
                <NewTextField
                    required
                    margin="dense"
                    id="title"
                    name="title"
                    label="Enter the title of the blog"
                    fullWidth
                    variant="outlined"
                    defaultValue={blog.title}
                    onChange={(e)=>handleChange(e)}
                />

                <Select name="category" id="category" defaultValue={blog.category} onChange={(e)=>handleChange(e)}>
                    {
                        categories.map((option) => {
                            return (
                                <option key={option} value={option}>{option}</option>
                            )
                        })
                    }
                </Select>

                <NewTextField
                    required
                    margin="dense"
                    id="content"
                    name="content"
                    label="Enter the content of the blog"
                    fullWidth
                    variant="outlined"
                    defaultValue={blog.content}
                    multiline
                    rows="4"
                    onChange={(e)=>handleChange(e)}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose} style={{backgroundColor: "#1100ab"}}>Cancel</Button>
                <Button variant="contained" type="submit" style={{backgroundColor: "#1100ab"}}>Edit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox;