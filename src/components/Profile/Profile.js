import React from "react";
import './Profile.css';
import { Link } from "react-router-dom";

function Profile() {
    return (
        <main className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form className="profile__form">
                    <div className="profile__form-fieldset">
                        <label className="profile__input-name">Имя</label>
                        <input
                            className="profile__input"
                            name="profileName"
                            placeholder="Виталий"
                            required
                            minLength={2}
                            maxLength={30}
                        ></input>
                        <span className="profileName-error profile__input-error"></span>
                    </div>
                    <div className="profile__form-fieldset profile__form-fieldset_last">
                        <label className="profile__input-name">E-mail</label>
                        <input
                            className="profile__input"
                            name="profileEmail"
                            placeholder="pochta@yandex.ru"
                            required
                        ></input>
                        <span className="profileEmail-error profile__input-error"></span>
                    </div>
                    <span className="profile__request-error">При обновлении профиля произошла ошибка.</span>
                    <div className="profile__buttons">
                        <button className="profile__button profile__button_edit" type="submit">Редактировать</button>
                        <Link className="profile__button profile__button-exit" to={'/'}>Выйти из аккаунта</Link>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Profile;