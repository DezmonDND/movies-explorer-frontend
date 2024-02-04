import React, { useState } from "react";
import './Header.css';
import logo from "../../images/logo.svg"
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(true);
    }

    const handleClose = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className={`header ${location.pathname === '/' ? "" : "header_logged"}`}>
            <div className="header__container">
                <Link className="header__logo" to="/">
                    <img src={logo} alt="Логотип шапки" className="header__link"></img>
                </Link>
                <Navigation></Navigation>
                <button className={`header__burger-btn ${location.pathname === '/' ? "header__burger-btn_white" : ""}`} type='button' onClick={toggleMenu}></button>
                <NavTab isOpen={isMenuOpen} onClose={handleClose}></NavTab>
            </div>
        </header>
    );
}

export default Header;