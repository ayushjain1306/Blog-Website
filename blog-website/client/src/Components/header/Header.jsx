import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";

const Appbar = styled(AppBar)`
    height: 9vh;
    margin: 0px;
    padding: 0px;
    width: 100%;
`

const ToolBar = styled(Toolbar)`
    height: 9vh;
    padding: 0px;
    margin: 0px;
    width: 100%;
    background-color: white;
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