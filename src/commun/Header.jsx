import React from "react";
import Logo from "./Logo/";
import SelectLanguage from "./SelectLanguage/";

function Header() {
    return (
        <header>
            <Logo />
            <SelectLanguage />
        </header>
    );
}

export default Header;