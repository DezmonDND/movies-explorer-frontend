import './Register.css';
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../../utils/Auth";
import { useFormWithValidation } from "../FormaValidator/FormaValidator";

const Register = () => {

    const navigate = useNavigate();
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, name } = values;
        auth.register(email, password, name)
            .then(() => {
                // setTooltipSuccess(true)
                // setInfoTooltipPopupOpen(true)
                navigate('/movies')
            })
            .catch((err) => {
                if (err.status === 400) {
                    console.log('Некорректно заполнено одно из полей');
                }
                // setTooltipSuccess(false)
                // setInfoTooltipPopupOpen(true)
            })
    }

    return (
        <main className="register">
            <a className="register__logo" href="/">
                <img className="register__picture" src={logo} alt="Логотип"></img>
            </a>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form
                className="register__container"
                onSubmit={handleSubmit}
            >
                <div className="form__fieldset">
                    <label className="form__input-label">Имя</label>
                    <input
                        onChange={handleChange}
                        className="form__input"
                        placeholder="Виталий"
                        name="name"
                        type="text"
                        required
                        // pattern="^[а-яА-ЯёЁa-zA-Z\\s\\-]+$"
                    ></input>
                    <span className="profileName-error profile__input-error">{errors.name}</span>
                </div>
                <div className="form__fieldset">
                    <label className="form__input-label">E-mail</label>
                    <input
                        onChange={handleChange}
                        className="form__input"
                        placeholder="pochta@yandex.ru"
                        name="email"
                        type="email"
                        required
                    ></input>
                    <span className="profileEmail-error profile__input-error">{errors.email}</span>
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
                    <span className="profilePassword-error profile__input-error">{errors.password}</span>
                </div>
                <div className="form__buttons">
                    <span className="form__request-error">Что-то пошло не так...</span>
                    <button

                        className="form__button"
                        type="submit"
                        disabled={!isValid}
                        style={{
                            backgroundColor: !isValid ? '#F8F8F8' : '',
                            color: !isValid ? '#C2C2C2' : '',
                        }}
                    >Зарегистрироваться</button>
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