import React from "react";
import './Navigation.css';
import profileIconBtn from "../../images/profile.png"
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__movies">
                <Link className="navigation__link" to="/movies" target="blank">Фильмы</Link>
                <Link className="navigation__link" to="/saved-movies" target="blank">Сохранённые фильмы</Link>
            </div>
            <div className="navigation__profile">
                <Link className="navigation__link" to="/signup" target="blank">Регистрация</Link>
                <Link className="navigation__link navigation__link_login" to="/signin" target="blank">Войти</Link>
                <Link className="navigation__link navigation__link_profile" to="/profile" target="blank">
                    <span className="navigation__profile-title">Аккаунт</span>
                    <img className="navigation__profile-icon" src={profileIconBtn} alt="Иконка профиля"></img>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;