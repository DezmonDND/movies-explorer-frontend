import React, { useState } from "react";
import './Header.css';
import logo from "../../images/logo.svg"
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(true);
    }

    const handleClose = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link className="header__logo" to="/" target="blank">
                    <img src={logo} alt="Логотип шапки" className="header__link"></img>
                </Link>
                <Navigation></Navigation>
                <button className='header__burger-btn' type='button' onClick={toggleMenu}></button>
                <NavTab isOpen={isMenuOpen} onClose={handleClose}></NavTab>
            </div>
        </header>
    );
}

export default Header;