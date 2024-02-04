import React from "react";
import './Navigation.css';
import profileIconBtn from "../../images/profile.svg"
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();

    return (
        <nav className="navigation">
            <div className="navigation__movies">
                {['/movies', '/saved-movies'].includes(location.pathname) && <NavLink className={`navigation__link ${location.pathname === '/movies' ? "navigation__link_active" : ""}`} to="/movies">Фильмы</NavLink>}
                {['/movies', '/saved-movies'].includes(location.pathname) && <NavLink className={`navigation__link ${location.pathname === '/movies' ? "navigation__link_active" : ""}`} to="/saved-movies">Сохранённые фильмы</NavLink>}
            </div>
            <div className="navigation__profile">
                {['/'].includes(location.pathname) && <NavLink className={`navigation__link `} to="/signup">Регистрация</NavLink>}
                {['/'].includes(location.pathname) && <NavLink className={`navigation__link navigation__link_login `} to="/signin">Войти</NavLink>}
                {['/movies', '/saved-movies'].includes(location.pathname) && <NavLink className={`navigation__link navigation__link_profile ${location.pathname === '/movies' || 'saved-movies' ? 'navigation__link_profile_active' : ""}`} to="/profile">
                    <span className="navigation__profile-title">Аккаунт</span>
                    <img className="navigation__profile-icon" src={profileIconBtn} alt="Иконка профиля"></img>
                </NavLink>}
            </div>
        </nav>
    );
}

export default Navigation;