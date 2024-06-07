import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import { useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import findComments from "../../service/findComments.js";
import userImage from "../header/images/user.png";
import { UserContext } from "../../context/userContext.js";
import { DialogBoxEdit, DialogBoxDelete } from "./DialogBox.jsx";

const NewBox = styled(Box)`
    padding-top: 20px;
    padding-bottom: 2px;
`

const AnotherBox = styled(Box)`
    margin-top: 10px;
    margin-bottom: 20px;
`

const FirstBox = styled(Box)`
    display: flex;
    align-items: center;
`

const SecondBox = styled(Box)`
    width: 20%;
    padding-left: 30px;
    margin-top: 10px;

    @media screen and (max-width: 500px){
        width: 90%;
        padding-right: 30px;
    }
`

const Typo = styled(Typography)`
    margin-left: 10px;
    font-size: 17px;
    color: #1100ab;
    font-weight: bold;
`

const Image = scStyled.img`
    width: 30px;
    height: 30px;
`

const AnotherTypo = styled(Typography)`
    text-align: justify;
`

const StyledBox = styled(Typography)`
    display: flex;
    align-items: center;
    width: 70%;
`

const NewButton = styled(Button)`
    background-color: #1100ab;
    font-weight: bold;
    margin-right: 20px;

    &:hover {
        background-color: #1100ab;
        opacity: 0.9;
    }
`

const OutputSection = () => {
    const [comments, setComments] = useState(null);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [ searchParams ] = useSearchParams();
    const token = Cookies.get("token");
    const searchId = searchParams.get("id");
    const { user } = useContext(UserContext);

    const handleClickEdit = () => {
        setOpenEdit(true);
    }

    const handleClickDelete = () => {
        setOpenDelete(true);
    }

    const getComments = async() => {
        const response = await findComments(searchId, token);
        setComments(response);
    }

    useEffect(() => {
        getComments();
    }, []);

    return (
        comments && comments.length > 0 ?
        <NewBox>
            {
                comments.map((comment) => {
                    return (
                        <AnotherBox key={comment._id}>
                            <FirstBox>
                                <StyledBox>
                                    <Image src={userImage} alt="user" />
                                    <Typo>{comment.username}</Typo>
                                </StyledBox>

                                {
                                    comment.username === user.username &&
                                    <>
                                        <NewButton variant="contained" onClick={() => handleClickEdit()}>Edit</NewButton>
                                        <NewButton variant="contained" onClick={() => handleClickDelete()}>Delete</NewButton>
                                    </>
                                }
                            </FirstBox>
                            <SecondBox>
                                <AnotherTypo>{comment.comment}</AnotherTypo>
                            </SecondBox>

                            {
                                openEdit && <DialogBoxEdit open={openEdit} setOpen={setOpenEdit} comment={comment} />
                            }

                            {
                                openDelete && <DialogBoxDelete open={openDelete} setOpen={setOpenDelete} comment={comment} />
                            }
                        </AnotherBox>
                    )
                })
            }
        </NewBox>
        : 
        <NewBox>
            <Typo style={{textAlign: "center", color: "grey"}}>No comments made yet.</Typo>
        </NewBox>
    )
}

export default OutputSection;