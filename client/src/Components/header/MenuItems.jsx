import React from "react";
import { Box, List, ListItem, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";

const NewBox = styled(Box)`
    color: #620aa0;
    margin-top: 15px;
`

const Details = scStyled.details`
    margin: 4px 0px;
`

const AnotherListItems = styled(ListItem)`
    margin-left: 20px;
`

const MenuItems = () => {
    return (
        <NewBox>
            <List>
                <ListItem>Latest Blogs</ListItem>
                <ListItem>Top Recommendations</ListItem>
                <Details>
                    <summary>Categories</summary>
                    <AnotherListItems style = {{marginTop: "4px"}}>Music</AnotherListItems>
                    <AnotherListItems>Sports</AnotherListItems>
                    <AnotherListItems>Literature</AnotherListItems>
                    <AnotherListItems>Food & Recipes</AnotherListItems>
                    <AnotherListItems>Health and Wellness</AnotherListItems>
                    <AnotherListItems>Travel</AnotherListItems>
                </Details>
            </List>
        </NewBox>
    )
}

export default MenuItems;