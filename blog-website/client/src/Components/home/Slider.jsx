import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserContext } from "../../context/userContext.js";

const NewBox = styled(Box)`
    width: 93%;
    margin: auto;
    margin-top: 5vh;
    margin-bottom: 3vh;
    background-color: white;
    border-radius: 3px;
    box-shadow: 8px 8px 8px -3px rgb(0, 0, 0, 0.2);
    padding: 2px 2% 3vh 2%;

    @media screen and (max-width: 500px){
        width: 80%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 95%;
    }
`

const AnotherBox = styled(Box)`
    text-align: center;
    padding-top: 5vh;
    border: 1px solid #ebebe9;
    border-radius: 3px;
    padding-bottom: 3vh;
    cursor: pointer;
    margin: auto;

    &:hover {
        border: 1px solid lightgrey;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        padding-top: 2vh;
        padding-bottom: 1vh;
    }
`

const Image = scStyled.img`
    height: 27vh;
    width: 14vw;
    border-radius: 3px;

    @media screen and (max-width: 500px){
        width: 45vw;
        height: 18vh;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        width: 23vw;
        height: 17vh;
    }
`

const HeadTypo = styled(Typography)`
    text-align: left;
    font-size: 20px;
    margin: auto;
    margin-top: 2vh;
    margin-bottom: 3vh;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 27px;
    }
`

const TitleTypo = styled(Typography)`
    color: #1100ab;
    font-size: 17px;
    font-weight: bold;
    margin: 1.5vh;

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 19px;
    }
`

const ContentTypo = styled(Typography)`
    font-size: 15px;
    padding: 0px 1vw;

    @media screen and (max-width: 500px){
        padding-left: 5vw;
        padding-right: 5vw;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        font-size: 17px;
    }
`

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 3
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
}

const Slider = ({category}) => {
    const { publicBlogs } = useSelector(state => state.getPublicBlogs);
    const { user } = useContext(UserContext);
    const filteredBlogs = publicBlogs && publicBlogs.filter(blog => blog.user !== user.username && blog.category === category);
    const navigate = useNavigate();

    const handleClick = (blog) => {
        navigate(`/blog/?id=${blog._id}`);
    }

    return (
        <NewBox>
            <HeadTypo>Blogs related to {category}</HeadTypo>
            {filteredBlogs && <Carousel
                responsive={responsive}>
                {
                    filteredBlogs.map((blog) => {
                        return (
                            <AnotherBox key={blog._id} onClick={() => handleClick(blog)}>
                                <Image src={blog.image} alt="blog-image" />
                                <TitleTypo>{blog.title.length > 18 ? blog.title.substring(0, 18) + "..." : blog.title}</TitleTypo>
                                <ContentTypo>{blog.content.substring(0,40)}...</ContentTypo>
                            </AnotherBox>
                        )
                    })
                }
            </Carousel>}
        </NewBox>
    )
}

export default Slider;