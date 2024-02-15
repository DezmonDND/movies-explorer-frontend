import "./NavTab.css";
import { Link, NavLink } from "react-router-dom";
import profileIconBtn from "../../images/profile.svg";
import closeBtn from "../../images/burger__close-btn.svg";

function NavTab({ isOpen, onClose }) {
    return (
        <div className={`navtab ${isOpen ? "navtab_menu-open" : ""}`}>
            <div className="navtab__container">
                <button
                    className="navtab__burger-btn"
                    type="button"
                    onClick={onClose}
                >
                    <img
                        className="navtab__burger"
                        src={closeBtn}
                        alt="Крестик"
                    ></img>
                </button>
                <NavLink
                    className="navtab__link"
                    to="/"
                    style={({ isActive }) => ({
                        borderBottom: isActive ? "1px solid black" : "",
                    })}
                >
                    Главная
                </NavLink>
                <NavLink
                    className="navtab__link"
                    to="/movies"
                    style={({ isActive }) => ({
                        borderBottom: isActive ? "1px solid black" : "",
                    })}
                >
                    Фильмы
                </NavLink>
                <NavLink
                    className="navtab__link"
                    to="/saved-movies"
                    style={({ isActive }) => ({
                        borderBottom: isActive ? "1px solid black" : "",
                    })}
                >
                    Сохранённые фильмы
                </NavLink>
                <Link
                    className="navtab__link navtab__link_profile"
                    to="/profile"
                >
                    <span className="navtab__profile-title">Аккаунт</span>
                    <img
                        className="navtab__profile-icon"
                        src={profileIconBtn}
                        alt="Иконка профиля"
                    ></img>
                </Link>
            </div>
        </div>
    );
}

export default NavTab;
