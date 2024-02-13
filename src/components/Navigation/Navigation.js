/* eslint-disable */
import "./Navigation.css";
import profileIconBtn from "../../images/profile.svg";
import { NavLink, useLocation } from "react-router-dom";

function Navigation(props) {
    const location = useLocation();
    const { loggedIn } = props;
    // const activeLink = isActive ? "navigation__link_underline" : "";

    return (
        <>
            {loggedIn ? (
                <nav className="navigation">
                    <div className="navigation__logged">
                        {["/movies", "/saved-movies", "/profile"].includes(
                            location.pathname,
                        ) && (
                            <NavLink
                                className={`navigation__link  ${location.pathname === "/movies" || "/saved-movies" || "/profile" ? "navigation__link_active" : ""}`}
                                to="/movies"
                                style={({ isActive }) => ({
                                    borderBottom: isActive
                                        ? "1px solid black"
                                        : "",
                                })}
                            >
                                Фильмы
                            </NavLink>
                        )}
                        {["/movies", "/saved-movies", "/profile"].includes(
                            location.pathname,
                        ) && (
                            <NavLink
                                className={`navigation__link ${location.pathname === "/movies" || "/saved-movies" || "/profile" ? "navigation__link_active" : ""}`}
                                to="/saved-movies"
                                style={({ isActive }) => ({
                                    borderBottom: isActive
                                        ? "1px solid black"
                                        : "",
                                })}
                            >
                                Сохранённые фильмы
                            </NavLink>
                        )}
                        {["/"].includes(location.pathname) && (
                            <NavLink className="navigation__link" to="/movies">
                                Фильмы
                            </NavLink>
                        )}
                        {["/"].includes(location.pathname) && (
                            <NavLink
                                className="navigation__link"
                                to="/saved-movies"
                            >
                                Сохранённые фильмы
                            </NavLink>
                        )}
                    </div>
                    {["/movies", "/saved-movies", "/profile"].includes(
                        location.pathname,
                    ) && (
                        <NavLink
                            className={`navigation__link navigation__link_profile ${location.pathname === ("/movies" || "/saved-movies" || "/profile") ? "navigation__link_profile_active" : ""}`}
                            to="/profile"
                        >
                            <span className="navigation__profile-title">
                                Аккаунт
                            </span>
                            <img
                                className="navigation__profile-icon"
                                src={profileIconBtn}
                                alt="Иконка профиля"
                            ></img>
                        </NavLink>
                    )}
                    {["/"].includes(location.pathname) && (
                        <NavLink
                            className="navigation__link navigation__link_profile"
                            to="/profile"
                        >
                            <span className="navigation__profile-title">
                                Аккаунт
                            </span>
                            <img
                                className="navigation__profile-icon"
                                src={profileIconBtn}
                                alt="Иконка профиля"
                            ></img>
                        </NavLink>
                    )}
                </nav>
            ) : (
                <nav className="navigation">
                    <div className="navigation__unlogged">
                        {["/"].includes(location.pathname) && (
                            <NavLink
                                className={`navigation__link`}
                                to="/signup"
                            >
                                Регистрация
                            </NavLink>
                        )}
                        {["/"].includes(location.pathname) && (
                            <NavLink
                                className={`navigation__link navigation__link_login `}
                                to="/signin"
                            >
                                Войти
                            </NavLink>
                        )}
                    </div>
                </nav>
            )}
        </>
    );
}

export default Navigation;
