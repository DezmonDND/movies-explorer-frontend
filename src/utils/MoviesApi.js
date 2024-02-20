export class MoviesApi {
    constructor({ url }) {
        this._url = url;
    }

    // Обработать промис, если ОК, преобразовать в строку, если ошибка - вывести в консоль ошибку
    _checkError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // Получить список фильмов
    getMovies() {
        return fetch("https://api.nomoreparties.co/beatfilm-movies", {
            headers: {
                "Content-Type": "application/json",
            },
        }).then(this._checkError);
    }
}

export const moviesApi = new MoviesApi({
    url: "https://api.nomoreparties.co",
});
