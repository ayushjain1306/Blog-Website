import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NewBox = styled(Box)`
    width: 85%;
    margin: auto;
    margin-top: 5vh;
    border-radius: 5px;
    padding: 15px;
`

const AnotherBox = styled(Box)`
    width: 90%;
    background-color: white;;
    border-radius: 3px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
`

const EmptyBox = styled(Box)`
    text-align: center;
    margin-top: 10vh;
    min-height: 50vh;
`

const EmptyTypo = styled(Typography)`
    font-size: 20px;
    color: #1100ab;
    font-weight: bold;
`

const HeadTypo = styled(Typography)`
    font-size: 25px;
    margin-bottom: 3vh;
`

const Image = scStyled.img`
    height: 20vh;
    width: 12vw;
    border-radius: 3px;

    @media screen and (max-width: 500px){
        height: 25vh;
        width: 60vw;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        height: 16vh;
        width: 20vw;
    }
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
`

const AnotherTypo = styled(Typography)`
    color: black;
    font-size: 13px;
    padding: 0px 10px;
`

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const BlogSection = ({ authorData }) => {
    return (
        <NewBox>
            
            {
                authorData.blogs.length > 0 ?
                <>
                    <HeadTypo>Blogs</HeadTypo>
                    <Carousel responsive={responsive}>
                        {
                            authorData.blogs.map((blog) => {
                                return (
                                    <AnotherBox key={blog._id}>
                                        <Image src={blog.image} alt="blog-image" />
                                        <Typo>{blog.title}</Typo>
                                        <AnotherTypo>{blog.content.substring(0,55)}...</AnotherTypo>
                                    </AnotherBox>
                                )
                            })
                        }
                    </Carousel>
                </>
                :
                <EmptyBox>
                    <EmptyTypo>No blog created yet.</EmptyTypo>
                </EmptyBox>
            }
        </NewBox>
    )
}

export default BlogSection;