import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
    const { movie, onMovieLike } = props;
    const baseUrl = 'https://api.nomoreparties.co/';
    const location = useLocation();


    function convertToHours(duration) {
        const hours = Math.floor(duration / 60)
        const minutes = duration % 60;
        return `${hours}ч ${minutes}м`
    }

    function handleLikeClick() {
        onMovieLike(movie);
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
                <button
                    className="movie__like"
                    type="button"
                    onClick={handleLikeClick}
                ></button>
            </div>
            <p className="movie__length">{convertToHours(movie.duration)}</p>
        </div>
    );
}

export default MoviesCard;