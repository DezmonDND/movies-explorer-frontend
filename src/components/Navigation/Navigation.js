import React from "react";
import './Navigation.css';
import profileIconBtn from "../../images/profile.png"
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__movies">
                <Link className="navigation__link" to="/movies">Фильмы</Link>
                <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
            </div>
            <div className="navigation__profile">
                <Link className="navigation__link" to="/signup">Регистрация</Link>
                <Link className="navigation__link navigation__link_login" to="/signin">Войти</Link>
                <Link className="navigation__link navigation__link_profile" to="/profile">
                    <span className="navigation__profile-title">Аккаунт</span>
                    <img className="navigation__profile-icon" src={profileIconBtn} alt="Иконка профиля"></img>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;