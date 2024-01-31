import React from "react";
import './Login.css';
import '../Register/Register.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
    return (
        <main className="register">
            <div className="register__container">
                <a className="register__logo" href="/">
                    <img className="register__picture" src={logo} alt="Логотип"></img>
                </a>
                <h1 className="register__title">Рады видеть!</h1>
                <div className="form__fieldset">
                    <label className="form__input-label">E-mail</label>
                    <input
                        className="form__input"
                        placeholder="pochta@yandex.ru"
                        name="profileEmail"
                    ></input>
                    <span className="profileEmail-error profile__input-error">Что-то пошло не так...</span>
                </div>
                <div className="form__fieldset">
                    <label className="form__input-label">Пароль</label>
                    <input
                        className="form__input"
                        placeholder="Ваш пароль"
                        name="profilePassword"
                    ></input>
                    <span className="profilePassword-error profile__input-error">Что-то пошло не так...</span>
                </div>
                <div className="form__buttons">
                    <span className="form__request-error">Что-то пошло не так...</span>
                    <button className="form__button" type="submit">Войти</button>
                    <div className="form__links">
                        <p className="form__link-text">Ещё не зарегистрированы?</p>
                        <Link className="form__link" to="/signup">Регистрация</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;