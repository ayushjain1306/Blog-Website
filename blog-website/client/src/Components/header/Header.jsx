import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";

const Appbar = styled(AppBar)`
    height: 9vh;
    margin: 0px;
    padding: 0px;
    background-color: #1100ab;
    width: 100%;
`

const ToolBar = styled(Toolbar)`
    height: 9vh;
    padding: 0px;
    margin: 0px;
    background-color: #1100ab;
    width: 100vw;

    @media screen and (min-width: 600px){
        padding: 0px;
        margin: 0px;
    }
`

const Header = () => {
    return (
        <Appbar>
            <ToolBar>
                <FirstSection />
                <SecondSection />
            </ToolBar>
        </Appbar>
    )
}

export default Header;