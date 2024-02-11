import React, { useCallback, useEffect, useState } from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"

function SavedMovies({ savedMovies, onCardDelete }) {
    const [likedMovies, setLikedMovies] = useState(savedMovies);
    const [shortSavedMoviesCheckbox, setShortSavedMoviesCheckbox] = useState(false);
    const [searchSavedMoviesValue, setSearchSavedMoviesValue] = useState('');

    // Получить список фильмов
    function getMoviesFromServer(searchValue) {
        findMovies(searchValue, shortSavedMoviesCheckbox, savedMovies);
    }

    const findMovies = useCallback((searchValue, isFiltred, movies) => {
        // Найти фильмы по значению в инпуте и отфильтровать по длине
        setLikedMovies(movies.filter((movie) => {
            const searchedMovie = movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
            return !isFiltred ? searchedMovie : (searchedMovie && movie.duration <= 40)
        }));
        setSearchSavedMoviesValue(searchValue);
    }, [])

    // Показать список фильмов
    useEffect(() => {
        findMovies(searchSavedMoviesValue, shortSavedMoviesCheckbox, savedMovies)
    }, [savedMovies, shortSavedMoviesCheckbox, searchSavedMoviesValue, findMovies])

    return (
        <main className="movies">
            <div className="movies__container">
                <SearchForm
                    allMovies={savedMovies}
                    getMoviesFromServer={getMoviesFromServer}
                    findMovies={findMovies}
                    shortMoviesCheckbox={shortSavedMoviesCheckbox}
                    setShortMoviesCheckbox={setShortSavedMoviesCheckbox}
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