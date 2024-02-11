import { useCallback, useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";

function Movies({ onCardLike, savedMovies }) {
    const [allMovies, setAllMovies] = useState([]);
    const [shortMoviesCheckbox, setShortMoviesCheckbox] = useState(false);
    const [foundMovies, setFoundMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Получить список фильмов с сервера
    function getMoviesFromServer(searchValue) {
        if (allMovies.length !== 0) {
            findMovies(searchValue, shortMoviesCheckbox, allMovies);
        } else {
            setIsLoading(true);
            moviesApi
                .getMovies()
                .then((movies) => {
                    setAllMovies(movies);
                    setShortMoviesCheckbox(false);
                    findMovies(searchValue, shortMoviesCheckbox, movies);
                })
                .catch((e) => {
                    console.log(`Ошибка при загрузке фильмов с сервера! ${e}`);
                })
                .finally(() => {
                    setIsLoading(false);
                });
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
                    : searchedMovie && movie.duration <= 40;
            }),
        );
        setSearchValue(searchValue);

        // Записать в ЛС массив всех фильмов, значение поиска и состояние чекбокса
        localStorage.setItem("allMovies", JSON.stringify(movies));
        localStorage.setItem("shortMoviesCheckbox", JSON.stringify(isFiltred));
        localStorage.setItem("searchValue", JSON.stringify(searchValue));
    }, []);

    // Загрузить список фильмов, состояние чекбокса и значение поиска из ЛС
    useEffect(() => {
        if (localStorage.getItem("allMovies")) {
            const allMovies = JSON.parse(localStorage.getItem("allMovies"));
            const shortMoviesCheckbox = JSON.parse(
                localStorage.getItem("shortMoviesCheckbox"),
            );
            const searchValue = JSON.parse(localStorage.getItem("searchValue"));

            setAllMovies(allMovies);
            setShortMoviesCheckbox(shortMoviesCheckbox);
            setSearchValue(searchValue);
            findMovies(searchValue, shortMoviesCheckbox, allMovies);
        }
    }, [findMovies]);

    return (
        <main className="movies">
            <div className="movies__container">
                <SearchForm
                    allMovies={allMovies}
                    getMoviesFromServer={getMoviesFromServer}
                    findMovies={findMovies}
                    shortMoviesCheckbox={shortMoviesCheckbox}
                    setShortMoviesCheckbox={setShortMoviesCheckbox}
                    searchValue={searchValue}
                ></SearchForm>
                {isLoading && <Preloader></Preloader>}
                <MoviesCardList
                    savedMovies={savedMovies}
                    foundMovies={foundMovies}
                    onCardLike={onCardLike}
                ></MoviesCardList>
            </div>
        </main>
    );
}

export default Movies;
