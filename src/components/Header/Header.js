import React from "react";
import './Header.css';
import logo from "../../images/logo.svg"
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <Link className="header__logo" to="/" target="blank">
                    <img src={logo} alt="Логотип шапки" className="header__link"></img>
                </Link>
                <Navigation></Navigation>
            </div>
        </header>
    );
}

export default Header;