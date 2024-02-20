export class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _checkError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // Регистрация
    register(email, password, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, name }),
        }).then(this._checkError);
    }

    // Авторизация
    login(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then(this._checkError);
    }

    // Проверка токена, запрос контента
    checkToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then(this._checkError)
            .catch((err) => console.log(err));
    }

    // Получить информацию о пользователе
    getUserInfo() {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                method: "GET",
                authorization: `Bearer ${token}`,
            },
        }).then(this._checkError);
    }

    // Обновить информацию пользователя
    updateUserInfo(inputValues) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: inputValues.email,
                name: inputValues.name,
            }),
        }).then(this._checkError);
    }

    // Получить сохраненные фильмы
    getSavedMovies() {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
                method: "GET",
                authorization: `Bearer ${token}`,
            },
        }).then(this._checkError);
    }

    // Сохранить новый фильм
    saveNewMovie(inputValues) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                country: inputValues.country,
                director: inputValues.director,
                duration: inputValues.duration,
                year: inputValues.year,
                description: inputValues.description,
                image: `https://api.nomoreparties.co${inputValues.image.url}`,
                trailerLink: inputValues.trailerLink,
                thumbnail: `https://api.nomoreparties.co${inputValues.image.formats.thumbnail.url}`,
                movieId: inputValues.id,
                nameRU: inputValues.nameRU,
                nameEN: inputValues.nameEN,
            }),
        }).then(this._checkError);
    }

    // Удалить фильм
    deleteMovie(movieId) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then(this._checkError);
    }
}

export const mainApi = new MainApi({
    baseUrl: "https://api.movies.den.nomoredomainsmonster.ru",
});
