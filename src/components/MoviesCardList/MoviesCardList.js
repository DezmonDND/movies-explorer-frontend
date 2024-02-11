import React, { useEffect, useState } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList(props) {
    const { savedMovies, foundMovies, onCardLike, onCardDelete } = props;
    const [showMovies, setShowMovies] = useState(12)
    const [moreMovies, setMoreMovies] = useState(4)

    function handleClickMore() {
        setShowMovies(showMovies + moreMovies)
    }

    function countMovies() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1280) {
            setShowMovies(16)
            setMoreMovies(4)
        } else if (windowWidth >= 769) {
            setShowMovies(12)
            setMoreMovies(3)
        } else if (windowWidth >= 420) {
            setShowMovies(8)
            setMoreMovies(2)
        }
        else if (windowWidth >= 220) {
            setShowMovies(5)
            setMoreMovies(2)
        }
    }

    useEffect(() => {
        setTimeout(countMovies(), 5000)
        window.addEventListener('resize', countMovies);
    }, [])

    return (
        <div className="movies__section">
            <ul className="movies__list"
            >
                {foundMovies.slice(0, showMovies).length !== 0 ? foundMovies.slice(0, showMovies).map((movie, movieId) => (
                    <li
                        className="movies__element"
                        key={movieId}
                    >
                        <MoviesCard
                            savedMovies={savedMovies}
                            movie={movie}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                        ></MoviesCard>
                    </li>
                )) : <span className="movies__not-found">Ничего не найдено</span>}
            </ul>
            {showMovies < foundMovies.length && <button
                className="movies__button-more"
                type="button"
                onClick={handleClickMore}
            >Ещё</button>}
        </div>
    );
}

export default MoviesCardList;