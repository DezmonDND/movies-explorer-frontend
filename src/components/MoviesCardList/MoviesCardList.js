import { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import {
    BIG_WIDTH_SIZE,
    BIG_WIDTH_COLUMNS,
    BIG_WIDTH_CARDS,
    MIDDLE_WIDTH_SIZE,
    MIDDLE_WIDTH_COLUMNS,
    MIDDLE_WIDTH_CARDS,
    MOBILE_WIDTH_SIZE,
    MOBILE_WIDTH_COLUMNS,
    MOBILE_WIDTH_CARDS,
    OLD_PHONE_WIDTH_SIZE,
    OLD_PHONE_WIDTH_COLUMNS,
} from "../../utils/constants";

function MoviesCardList(props) {
    const {
        savedMovies,
        foundMovies,
        onCardLike,
        onCardDelete,
        isFirstSearch,
    } = props;
    const [showMovies, setShowMovies] = useState(0);
    const location = useLocation();
    const windowWidth = window.innerWidth;

    useEffect(() => {
        if (windowWidth >= BIG_WIDTH_SIZE) {
            setShowMovies(BIG_WIDTH_COLUMNS);
        } else if (windowWidth >= MIDDLE_WIDTH_SIZE) {
            setShowMovies(MIDDLE_WIDTH_COLUMNS);
        } else if (windowWidth >= MOBILE_WIDTH_SIZE) {
            setShowMovies(MOBILE_WIDTH_COLUMNS);
        } else if (windowWidth >= OLD_PHONE_WIDTH_SIZE) {
            setShowMovies(OLD_PHONE_WIDTH_COLUMNS);
        }
    }, [windowWidth]);

    function showMoreMovies() {
        if (windowWidth >= BIG_WIDTH_SIZE) {
            setShowMovies(showMovies + BIG_WIDTH_CARDS);
        } else if (windowWidth >= MIDDLE_WIDTH_SIZE) {
            setShowMovies(showMovies + MIDDLE_WIDTH_CARDS);
        } else {
            setShowMovies(showMovies + MOBILE_WIDTH_CARDS);
        }
    }

    return (
        <div className="movies__section">
            {!isFirstSearch && location.pathname === "/movies" && (
                <ul className="movies__list">
                    {foundMovies.slice(0, showMovies).length !== 0 ? (
                        foundMovies.slice(0, showMovies).map((movie) => (
                            <li className="movies__element" key={movie.id}>
                                <MoviesCard
                                    savedMovies={savedMovies}
                                    movie={movie}
                                    onCardLike={onCardLike}
                                    onCardDelete={onCardDelete}
                                ></MoviesCard>
                            </li>
                        ))
                    ) : (
                        <span className="movies__not-found">
                            Ничего не найдено
                        </span>
                    )}
                </ul>
            )}
            {location.pathname === "/movies" &&
                showMovies < foundMovies.length && (
                    <button
                        className="movies__button-more"
                        type="button"
                        onClick={showMoreMovies}
                    >
                        Ещё
                    </button>
                )}
            {location.pathname === "/saved-movies" && (
                <ul className="movies__list">
                    {foundMovies.length !== 0 ? (
                        foundMovies.map((movie) => {
                            return (
                                <li
                                    className="movies__element"
                                    key={movie.movieId}
                                >
                                    <MoviesCard
                                        savedMovies={savedMovies}
                                        movie={movie}
                                        onCardLike={onCardLike}
                                        onCardDelete={onCardDelete}
                                    ></MoviesCard>
                                </li>
                            );
                        })
                    ) : (
                        <span className="movies__not-found">
                            Ничего не найдено
                        </span>
                    )}
                </ul>
            )}
        </div>
    );
}

export default MoviesCardList;
