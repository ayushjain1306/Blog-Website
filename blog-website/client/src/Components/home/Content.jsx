import React from "react";
import { Box, styled } from "@mui/material";
import Slider from "./Slider.jsx";
import LatestBlogs from "./LatestBlogs.jsx";

const NewBox = styled(Box)`
    width: 100%;
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

const Content = ({ blogs, content, setContent }) => {

    return (
        <NewBox>
            <LatestBlogs />
            {
                categories.map((category) => {
                    return(
                        <Slider category={category} />
                    )
                })
            }
        </NewBox>
    )
}

export default Content;