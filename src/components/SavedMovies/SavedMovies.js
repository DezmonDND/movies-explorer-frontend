import React from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"

function SavedMovies() {
    return (
        <main className="movies">
        <div className="movies__container">
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
        </div>
    </main>
    );
}

export default SavedMovies;