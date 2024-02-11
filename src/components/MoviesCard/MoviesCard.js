import React, { useEffect, useState } from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
    const { movie, onCardLike, onCardDelete, savedMovies } = props;
    const baseUrl = 'https://api.nomoreparties.co/';
    const location = useLocation();
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        setIsLiked(savedMovies.some(m => movie.id === m.movieId))
    }, [savedMovies, movie])

    function convertToHours(duration) {
        const hours = Math.floor(duration / 60)
        const minutes = duration % 60;
        return `${hours}ч ${minutes}м`
    }

    function handleLikeClick() {
        onCardLike(movie);
    }

    function handleDeleteMovie() {
        onCardDelete(movie)
    }

    return (
        <div
            className="movie"
        >
            <a className="movie__trailer-link" href={movie.trailerLink}>
                <img
                    className="movie__image"
                    src={location.pathname === '/saved-movies' ? movie.image : baseUrl + movie.image.url}
                    alt={movie.nameRU}
                ></img>
            </a>
            <div className="movie__info">
                <h2 className="movie__title">{movie.nameRU}</h2>
                {location.pathname === '/movies' && <button
                    className={`movie__like ${isLiked && 'movie__like_active'}`}
                    type="button"
                    onClick={handleLikeClick}
                ></button>}
                {location.pathname === '/saved-movies' && <button
                    className="movie__delete"
                    type="button"
                    onClick={handleDeleteMovie}
                ></button>}
            </div>
            <p className="movie__length">{convertToHours(movie.duration)}</p>
        </div>
    );
}

export default MoviesCard;