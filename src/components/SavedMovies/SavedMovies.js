import { useCallback, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { SHORTS_DURATION } from "../../utils/constants";

function SavedMovies({ savedMovies, onCardDelete }) {
    const [likedMovies, setLikedMovies] = useState(savedMovies);
    const [shortSavedMoviesCheckbox, setShortSavedMoviesCheckbox] =
        useState(false);
    const [searchSavedMoviesValue, setSearchSavedMoviesValue] = useState("");

    // Получить список фильмов
    function getMoviesFromServer(searchValue) {
        findMovies(searchValue, shortSavedMoviesCheckbox, savedMovies);
    }

    const findMovies = useCallback((searchValue, isFiltred, movies) => {
        // Найти фильмы по значению в инпуте и отфильтровать по длине
        setLikedMovies(
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
            })
        );
        setSearchSavedMoviesValue(searchValue);
    }, []);

    // Показать список фильмов
    useEffect(() => {
        findMovies(
            searchSavedMoviesValue,
            shortSavedMoviesCheckbox,
            savedMovies
        );
    }, [
        savedMovies,
        shortSavedMoviesCheckbox,
        searchSavedMoviesValue,
        findMovies,
    ]);

    return (
        <main className="movies">
            <div className="movies__container">
                <SearchForm
                    allMovies={savedMovies}
                    getMoviesFromServer={getMoviesFromServer}
                    findMovies={findMovies}
                    shortMoviesCheckboxState={shortSavedMoviesCheckbox}
                    setShortMoviesCheckboxState={setShortSavedMoviesCheckbox}
                    searchValue={searchSavedMoviesValue}
                ></SearchForm>
                <MoviesCardList
                    savedMovies={likedMovies}
                    foundMovies={likedMovies}
                    onCardDelete={onCardDelete}
                ></MoviesCardList>
            </div>
        </main>
    );
}

export default SavedMovies;
