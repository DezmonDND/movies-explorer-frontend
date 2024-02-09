import React, { useEffect, useState } from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import { moviesApi } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import { mainApi } from "../../utils/MainApi";

function Movies() {
    const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')) ?? [])
    const [searchValue, setSearchValue] = useState(JSON.parse(localStorage.getItem('searchValue')) ?? '');
    const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem('foundMovies')) ?? []);

    const [shortMovies, setShortMovies] = useState(JSON.parse(localStorage.getItem('shortMovies')) ?? false)
    const [savedMovies, setSavedMovies] = useState([])
    // Стейт лоадера
    const [isLoading, setLoading] = useState(false);
    // Сохранить данные поиска в ЛС
    useEffect(() => {
        const foundMovies = findMovie(allMovies, searchValue, shortMovies)

        localStorage.setItem('allMovies', JSON.stringify(allMovies))
        localStorage.setItem('searchValue', JSON.stringify(searchValue))
        localStorage.setItem('foundMovies', JSON.stringify(foundMovies))
        localStorage.setItem('shortMovies', JSON.stringify(shortMovies))

    }, [allMovies, searchValue, foundMovies, shortMovies])

    // Очистить ЛС при выходе
    function clearStorage() {
        localStorage.removeItem('allMovies')
        localStorage.removeItem('searchValue')
        localStorage.removeItem('foundMovies')
        localStorage.removeItem('shortMovies')
    }

    // Загрузить все фильмы с сервера
    useEffect(() => {
        if (searchValue.length > 0) {
            if (allMovies.length !== 0) {
                setAllMovies(JSON.parse(localStorage.getItem('allMovies')))
                setSearchValue(JSON.parse(localStorage.getItem('searchValue')))
                setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')))
                setShortMovies(JSON.parse(localStorage.getItem('shortMovies')))
            } else {
                setLoading(true)
                moviesApi.getMovies()
                    // .then(movies => movies.map(movie => {
                    //     return movie;
                    // }))
                    .then(movies => {
                        setAllMovies(movies);
                        setFoundMovies(findMovie(movies, searchValue, shortMovies));

                        localStorage.setItem('allMovies', JSON.stringify(movies))
                        localStorage.setItem('foundMovies', JSON.stringify(findMovie(movies, searchValue, shortMovies)))
                    })
                    .catch((e) => {
                        console.log(`Error! ${e}`)
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            }
        }
    }
        , [searchValue, allMovies.length, shortMovies])

    // Найти фильм по значению в инпуте
    function findMovie(movies, valueInput, isShortMovie) {
        return movies.filter(movie =>
            (isShortMovie ? movie.duration < 40 : movie)
            && (movie.nameRU.toLowerCase().includes(valueInput.toLowerCase())
                || movie.nameEN.toLowerCase().includes(valueInput.toLowerCase()))
        )
    }

    // Поставить лайк
    function handleMovieLike(data) {
        const isSaved = savedMovies.some(element => data.id === element.movieId)
        const chekedMovie = savedMovies.filter((movie) => {
            return movie.movieId === data.id;
        })
        console.log(chekedMovie);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        if (!isSaved) {
            mainApi.saveNewMovie(data)
                .then((newCard) => {
                    console.log(newCard);
                    setSavedMovies([...savedMovies, newCard]);
                })
                .catch((e) => console.log(`Error! ${e}`));
        } else {
            mainApi.deleteMovie()
                .then((newCard) => {
                    setSavedMovies([...savedMovies]);
                })
                .catch((e) => console.log(`Error! ${e}`));
        }
    }


    return (
        <main className="movies">
            <div className="movies__container">
                <SearchForm
                    valueInput={searchValue}
                    setValueInput={setSearchValue}
                    shortMovies={shortMovies}
                    setShortMovies={setShortMovies}
                ></SearchForm>
                {isLoading && <Preloader></Preloader>}
                <MoviesCardList
                    foundMovies={foundMovies}
                    onMovieLike={handleMovieLike}
                ></MoviesCardList>
            </div>
        </main>
    );
}

export default Movies;