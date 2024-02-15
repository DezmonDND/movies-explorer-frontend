import { useCallback, useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import { SHORTS_DURATION } from "../../utils/constants";

function Movies({
    savedMovies,
    isFirstSearch,
    setIsFirstSearch,
    onCardLike,
    onCardDelete,
}) {
    const [allMovies, setAllMovies] = useState([]);
    const [foundMovies, setFoundMovies] = useState([]);
    const [shortMoviesCheckboxState, setShortMoviesCheckboxState] =
        useState(false);
    const [searchValueState, setSearchValueState] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Получить список фильмов с сервера
    function getMoviesFromServer(searchValue) {
        if (allMovies.length !== 0) {
            findMovies(searchValue, shortMoviesCheckboxState, allMovies);
        } else {
            setIsLoading(true);
            moviesApi
                .getMovies()
                .then((movies) => {
                    setAllMovies(movies);
                    setShortMoviesCheckboxState(false);
                    findMovies(searchValue, shortMoviesCheckboxState, movies);
                })
                .catch((e) => {
                    console.log(`Ошибка при загрузке фильмов с сервера! ${e}`);
                })
                .finally(() => setIsLoading(false));
        }
    }

    const findMovies = useCallback((searchValue, isFiltred, movies) => {
        // Найти фильмы по значению в инпуте и отфильтровать по длине
        setFoundMovies(
            movies.filter((movie) => {
                const searchedMovie =
                    movie.nameRU
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    movie.nameEN
                        .toLowerCase()
                        .includes(searchValue.toLocaleLowerCase());
                return !isFiltred
                    ? searchedMovie
                    : searchedMovie && movie.duration < SHORTS_DURATION;
            }),
        );

        setSearchValueState(searchValue);

        // Записать в ЛС массив всех фильмов, значение поиска и состояние чекбокса
        localStorage.setItem("allMovies", JSON.stringify(movies));
        localStorage.setItem("shortMoviesChecked", JSON.stringify(isFiltred));
        localStorage.setItem("searchValue", JSON.stringify(searchValue));
    }, []);

    // Загрузить список фильмов, состояние чекбокса и значение поиска из ЛС
    useEffect(() => {
        if (localStorage.allMovies) {
            const movies = JSON.parse(localStorage.allMovies);
            const checkboxState = JSON.parse(localStorage.shortMoviesChecked);
            const searchValue = JSON.parse(localStorage.searchValue);
            
            setAllMovies(movies);
            setShortMoviesCheckboxState(checkboxState);
            setSearchValueState(searchValue);
            findMovies(searchValue, checkboxState, movies);
        }
    }, []);

    return (
        <main className="movies">
            <div className="movies__container">
                <SearchForm
                    allMovies={allMovies}
                    getMoviesFromServer={getMoviesFromServer}
                    findMovies={findMovies}
                    shortMoviesCheckboxState={shortMoviesCheckboxState}
                    setShortMoviesCheckboxState={setShortMoviesCheckboxState}
                    searchValueState={searchValueState}
                    isFirstSearch={isFirstSearch}
                    setIsFirstSearch={setIsFirstSearch}
                />
                {isLoading && <Preloader></Preloader>}
                <MoviesCardList
                    savedMovies={savedMovies}
                    foundMovies={foundMovies}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                    isFirstSearch={isFirstSearch}
                    setIsFirstSearch={setIsFirstSearch}
                />
            </div>
        </main>
    );
}

export default Movies;
