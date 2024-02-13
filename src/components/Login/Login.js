import "../Register/Register.css";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../../utils/Auth";
import { useFormWithValidation } from "../FormaValidator/FormaValidator";
import { INCORRECT_PASSWORD } from "../../utils/constants";
import { useEffect } from "react";

const Login = ({
    handleLogin,
    requestInfo,
    setRequestInfo,
    handleAutorize,
}) => {
    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const navigate = useNavigate();

    useEffect(() => {
        setRequestInfo("");
    }, [setRequestInfo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = values;

        if (!email || !password) {
            console.log("Необходимо заполнить все поля");
            // setTooltipSuccess(false)
            // setInfoTooltipPopupOpen(true)
            return;
        }

        handleAutorize(email, password);
    };

    return (
        <main className="register">
            <a className="register__logo" href="/">
                <img
                    className="register__picture"
                    src={logo}
                    alt="Логотип"
                ></img>
            </a>
            <h1 className="register__title">Рады видеть!</h1>
            <form className="register__container" onSubmit={handleSubmit}>
                <div className="form__fieldset">
                    <label className="form__input-label">E-mail</label>
                    <input
                        onChange={handleChange}
                        className="form__input"
                        placeholder="pochta@yandex.ru"
                        name="email"
                        id="profileEmail"
                        type="email"
                        required
                    ></input>
                    <span className="profileEmail-error profile__input-error">
                        {errors.email}
                    </span>
                </div>
                <div className="form__fieldset">
                    <label className="form__input-label">Пароль</label>
                    <input
                        onChange={handleChange}
                        className="form__input"
                        placeholder="Ваш пароль"
                        name="password"
                        id="profilePassword"
                        type="password"
                        required
                    ></input>
                    <span className="profilePassword-error profile__input-error">
                        {errors.password}
                    </span>
                </div>
                <div className="form__buttons form__buttons_login">
                    <span className="form__request-error form__request-error_type-login">
                        {requestInfo}
                    </span>
                    <button
                        className="form__button form__button_type-login"
                        type="submit"
                        disabled={!isValid}
                        style={{
                            backgroundColor: !isValid ? "#F8F8F8" : "",
                            color: !isValid ? "#C2C2C2" : "",
                        }}
                    >
                        Войти
                    </button>
                    <div className="form__links">
                        <p className="form__link-text">
                            Ещё не зарегистрированы?
                        </p>
                        <Link className="form__link" to="/signup">
                            Регистрация
                        </Link>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default Login;
