import React from "react";
import '../Register/Register.css';
import './Login.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
    return (
        <main className="register">
            <form className="register__container">
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
                        required

                    ></input>
                    <span className="profileEmail-error profile__input-error">Что-то пошло не так...</span>
                </div>
                <div className="form__fieldset">
                    <label className="form__input-label">Пароль</label>
                    <input
                        className="form__input"
                        placeholder="Ваш пароль"
                        name="profilePassword"
                        required
                        minLength={2}
                        maxLength={30}
                    ></input>
                    <span className="profilePassword-error profile__input-error">Что-то пошло не так...</span>
                </div>
                <div className="form__buttons form__buttons_login">
                    <span className="form__request-error form__request-error_type-login">Что-то пошло не так...</span>
                    <button className="form__button form__button_type-login" type="submit">Войти</button>
                    <div className="form__links">
                        <p className="form__link-text">Ещё не зарегистрированы?</p>
                        <Link className="form__link" to="/signup">Регистрация</Link>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Login;