import { useContext, useEffect } from "react";
import "./Profile.css";
import { useFormWithValidation } from "../FormaValidator/FormaValidator";
import { REGEX_NAME, REGEX_EMAIL } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
    handleLogout,
    onUpdateUser,

    requestInfo,
    setRequestInfo,
}) {
    const { values, setValues, handleChange, errors, isValid, setIsValid } =
        useFormWithValidation();
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setRequestInfo('')
    }, [setRequestInfo])

    useEffect(() => {
        if (currentUser) {
            setValues({
                name: currentUser.name,
                email: currentUser.email,
            });
        }
    }, [currentUser, setValues]);

    useEffect(() => {
        if (
            currentUser.name === values.name &&
            currentUser.email === values.email
        ) {
            setIsValid(false);
        }
    }, [setIsValid, currentUser, values]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name: values.name,
            email: values.email,
        });
    }

    return (
        <main className="profile">
            <div className="profile__container">
                <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__form-fieldset">
                        <label className="profile__input-name">Имя</label>
                        <input
                            onChange={handleChange}
                            value={values.name || ""}
                            className="profile__input"
                            name="name"
                            placeholder="Виталий"
                            required
                            pattern={REGEX_NAME}
                            minLength={2}
                            maxLength={30}
                        ></input>
                    </div>
                    <span className="profileName-error profile__input-error">
                        {errors.name}
                    </span>
                    <div className="profile__form-fieldset profile__form-fieldset_last">
                        <label className="profile__input-name">E-mail</label>
                        <input
                            onChange={handleChange}
                            value={values.email || ""}
                            className="profile__input"
                            name="email"
                            type="email"
                            placeholder="pochta@yandex.ru"
                            pattern={REGEX_EMAIL}
                            required
                        ></input>
                    </div>
                    <span className="profileEmail-error profile__input-error">
                        {errors.email}
                    </span>
                    <span className="profile__request-error">
                        {requestInfo}
                    </span>
                    <div className="profile__buttons">
                        <button
                            className="profile__button profile__button_edit"
                            type="submit"
                            disabled={!isValid}
                            style={{
                                color: !isValid ? "#C2C2C2" : "",
                            }}
                        >
                            Редактировать
                        </button>
                        <button
                            className="profile__button profile__button-exit"
                            type="button"
                            onClick={handleLogout}
                        >
                            Выйти из аккаунта
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Profile;
