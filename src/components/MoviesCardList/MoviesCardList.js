import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList() {
    return (
        <div className="movies__section">
            <ul className="movies__list">
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
                <li className="movies__element">
                    <MoviesCard></MoviesCard>
                </li>
            </ul>
            <button className="movies__button-more" type="button">Ещё</button>
        </div>
    );
}

export default MoviesCardList;