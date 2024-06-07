import React, { useState } from "react";
import { Box, Typography, TextField, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import Buttons from "./Buttons.jsx";
import Fab from '@mui/material/Fab';

const NewBox = styled(Box)`
    width: 100%;
    padding-top: 30px;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        padding-top: 60px;
    }
`

const AnotherBox = scStyled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledBox = styled(Box)`
    width: 70%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 500px){
        width: 80%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 60%;
    }
`

const NewTextField = styled(TextField)`
    background-color: white;
    width: 70%;
    margin-top: 20px;

    @media screen and (max-width: 500px){
        width: 80%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 60%;
        font-size: 18px;
    }
`

const Select = scStyled.select`
    width: 47%;
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

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 47%;
    }
`

const Input = scStyled.input`
    width: 30%;
    border-color: rgba(0, 0, 0, 0.23);
    font-size: 16px;

    &: hover {
        border-color: black;
    }
`

const Typo = styled(Typography)`
    color: red;
    font-size: 12px;
`

const Symbol = styled(Typography)`
    font-size: 35px;
    color: white;
`

const NewTypo = styled(Typography)`
    color: grey;
    font-size: 12px;
    text-align: right;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 15px;
    }
`

const TextImage = styled(Typography)`
    margin-left: 10px;
    font-size: 17px;

    @media screen and (max-width: 500px){
        font-size: 18px;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 20px;
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

const inputData = {
    title: "",
    category: "Music",
    content: "",
    image: "",
    privacy: "Public"
}

const SecondSection = ({ image, setImage }) => {
    const [fieldData, setFieldData] = useState(inputData);
    const [words, setWords] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setFieldData({ ...fieldData, [e.target.id]: e.target.value });
    }

    const handleChangeContent = (e) => {
        setWords(e.target.value.length);

        if (words < 1499) {
            setFieldData({ ...fieldData, [e.target.id]: e.target.value });
            setInputValue(e.target.value);
        }
        else {
            setInputValue(e.target.value.substring(0, 1499));
        }
    }

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setFieldData({ ...fieldData, image: file });

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setImage(event.target.result);
            }

            reader.readAsDataURL(file);
        }
        else {
            setImage(null);
        }
    }

    return (
        <NewBox>
            <AnotherBox>
                <Box style={{display: "flex", alignItems: "center"}}>
                    <Input type="file" id="image-select" style={{ display: "none" }} accept="image/*" onChange={(e) => handleChangeImage(e)} />
                    <Fab style={{ backgroundColor: "#1100ab"}} onClick={() => document.getElementById("image-select").click()}>
                        <Symbol>+</Symbol>
                    </Fab>
                    <TextImage>{image === null ? "Choose Image" : "Edit Image"}</TextImage>
                </Box>
                <Typo id="error2"></Typo>


                <NewTextField variant="outlined" id="title" label="Enter the title of the blog" onChange={(e) => handleChange(e)} />
                <Typo id="error1"></Typo>

                <StyledBox>
                    <Select name="category" id="category" onChange={(e) => handleChange(e)}>
                        {
                            categories.map((option) => {
                                return (
                                    <option key={option} value={option}>{option}</option>
                                )
                            })
                        }
                    </Select>

                    <Select name="privacy" id="privacy" onChange={(e) => handleChange(e)}>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </Select>

                </StyledBox>

                <NewTextField multiline rows={8} id="content" variant="outlined" label="Add the content of your blog" value={inputValue} onChange={(e) => handleChangeContent(e)} />
                <Typo id="error3"></Typo>
                <NewTypo>{words} / 1500 (Minimum 500 words)</NewTypo>

                <Buttons inputData={inputData} fieldData={fieldData} image={image} setFieldData={setFieldData} />
            </AnotherBox>
        </NewBox>
    )
}

export default SecondSection;