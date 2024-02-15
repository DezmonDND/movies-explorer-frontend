import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import debounce from "lodash.debounce";
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
    OLD_PHONE_WIDTH_COLUMNS,
} from "../../utils/constants";

function MoviesCardList({
    savedMovies,
    foundMovies,
    onCardLike,
    onCardDelete,
    isFirstSearch,
}) {
    const location = useLocation();
    const [showMovies, setShowMovies] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const moviesList = foundMovies.slice(0, showMovies);
    const [message, setMessage] = useState("");

    // Количество фильмов, отображаемое кнопкой еще
    function showMoreMoviesButton() {
        if (windowWidth >= BIG_WIDTH_SIZE) {
            setShowMovies(showMovies + BIG_WIDTH_CARDS);
        } else if (windowWidth >= MIDDLE_WIDTH_SIZE) {
            setShowMovies(showMovies + MIDDLE_WIDTH_CARDS);
        } else {
            setShowMovies(showMovies + MOBILE_WIDTH_CARDS);
        }
    }

    // Количество фильмов, отображаемое в блоке результатов
    function countMovies() {
        if (windowWidth >= BIG_WIDTH_SIZE) {
            setShowMovies(BIG_WIDTH_COLUMNS);
        } else if (windowWidth >= MIDDLE_WIDTH_SIZE) {
            setShowMovies(MIDDLE_WIDTH_COLUMNS);
        } else if (windowWidth >= MOBILE_WIDTH_SIZE) {
            setShowMovies(MOBILE_WIDTH_COLUMNS);
        } else {
            setShowMovies(OLD_PHONE_WIDTH_COLUMNS);
        }
    }

    useEffect(() => {
        countMovies();
    }, [windowWidth]);

    useEffect(() => {
        // Текущая ширина экрана и таймер для отслеживания изменений
        const screenSize = debounce(
            () => setWindowWidth(window.innerWidth),
            10
        );

        window.addEventListener("resize", screenSize);
        return () => {
            window.removeEventListener("resize", screenSize);
        };
    }, []);

    useEffect(() => {
        if (!isFirstSearch && foundMovies.length === 0) {
            setMessage("Ничего не найдено");
        } else {
            setMessage("");
        }
    }, [foundMovies, isFirstSearch]);

    return (
        <div className="movies__section">
            {foundMovies.length !== 0 && location.pathname === "/movies" && (
                <ul className="movies__list">
                    {moviesList.length !== 0 &&
                        moviesList.map((movie) => (
                            <li className="movies__element" key={movie.id}>
                                <MoviesCard
                                    savedMovies={savedMovies}
                                    movie={movie}
                                    onCardLike={onCardLike}
                                    onCardDelete={onCardDelete}
                                ></MoviesCard>
                            </li>
                        ))}
                </ul>
            )}
            {location.pathname === "/movies" && (
                <span className="movies__not-found">{message}</span>
            )}
            {location.pathname === "/movies" &&
                showMovies < foundMovies.length && (
                    <button
                        className="movies__button-more"
                        type="button"
                        onClick={showMoreMoviesButton}
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
