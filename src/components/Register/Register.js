import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import * as auth from "../../utils/Auth";
import { useFormWithValidation } from "../FormaValidator/FormaValidator";
import { BAD_EMAIL, REGEX_EMAIL, REGEX_NAME } from "../../utils/constants";
import { useEffect } from "react";

const Register = ({ requestInfo, setRequestInfo, handleAutorize }) => {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    useEffect(() => {
        setRequestInfo("");
    }, [setRequestInfo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, name } = values;

        auth.register(email, password, name)
            .then((res) => {
                if (res) {
                    handleAutorize(email, password);
                    setRequestInfo("");
                }
            })
            .catch((err) => {
                if (err.status === 400) {
                    console.log("Некорректно заполнено одно из полей");
                }
                setRequestInfo(BAD_EMAIL);
            });
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
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__container" onSubmit={handleSubmit}>
                <div className="form__fieldset">
                    <label className="form__input-label">Имя</label>
                    <input
                        onChange={handleChange}
                        className="form__input"
                        placeholder="Виталий"
                        name="name"
                        type="text"
                        required
                        pattern={REGEX_NAME}
                        minLength={2}
                        maxLength={30}
                    ></input>
                    <span className="profileName-error profile__input-error">
                        {errors.name}
                    </span>
                </div>
                <div className="form__fieldset">
                    <label className="form__input-label">E-mail</label>
                    <input
                        onChange={handleChange}
                        className="form__input"
                        placeholder="pochta@yandex.ru"
                        pattern={REGEX_EMAIL}
                        name="email"
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
                        type="password"
                        required
                    ></input>
                    <span className="profilePassword-error profile__input-error">
                        {errors.password}
                    </span>
                </div>
                <div className="form__buttons">
                    <span className="form__request-error">{requestInfo}</span>
                    <button
                        className="form__button"
                        type="submit"
                        disabled={!isValid}
                        style={{
                            backgroundColor: !isValid ? "#F8F8F8" : "",
                            color: !isValid ? "#C2C2C2" : "",
                        }}
                    >
                        Зарегистрироваться
                    </button>
                    <div className="form__links">
                        <p className="form__link-text">Уже зарегистрированы?</p>
                        <Link className="form__link" to="/signin">
                            Войти
                        </Link>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default Register;
