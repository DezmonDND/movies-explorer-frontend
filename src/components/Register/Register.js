import React from "react";
import './Register.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
    return (
        <main className="register">
            <a className="register__logo" href="/">
                <img className="register__picture" src={logo} alt="Логотип"></img>
            </a>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__container">
                <div className="form__fieldset">
                    <label className="form__input-label">Имя</label>
                    <input
                        className="form__input"
                        placeholder="Виталий"
                        name="profileName"
                        required
                        minLength={2}
                        maxLength={30}
                    ></input>
                    <span className="profileName-error profile__input-error">Что-то пошло не так...</span>
                </div>
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
                <div className="form__buttons">
                    <span className="form__request-error">Что-то пошло не так...</span>
                    <button className="form__button" type="submit">Зарегистрироваться</button>
                    <div className="form__links">
                        <p className="form__link-text">Уже зарегистрированы?</p>
                        <Link className="form__link" to="/signin">Войти</Link>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Register;