import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"

function Movies() {
    return (
        <main className="movies">
            <div className="movies__container">
                <SearchForm></SearchForm>
                <MoviesCardList></MoviesCardList>
            </div>
        </main>
    );
}

export default Movies;