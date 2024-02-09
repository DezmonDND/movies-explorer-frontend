import React, { useEffect, useState } from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import { mainApi } from "../../utils/MainApi";

function SavedMovies() {
    const [savedMovies, setSavedMovies] = useState([])

    useEffect(() => {
        mainApi.getSavedMovies()
        .then(movies => {
            setSavedMovies(movies)
        })
    }, [])

    return (
        <main className="movies">
            <div className="movies__container">
                <SearchForm></SearchForm>
                <MoviesCardList
                    foundMovies={savedMovies}
                ></MoviesCardList>
            </div>
        </main>
    );
}

export default SavedMovies;