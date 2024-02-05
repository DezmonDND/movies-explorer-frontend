import React from "react";
import './MoviesCard.css';
import moviePreview from "../../images/movie_preview.png"
import { Link } from "react-router-dom";

function MoviesCard(movie) {
    return (
        <div className="movie">
            <Link className="movie__trailer-link" to="/">
                <img
                    className="movie__image"
                    src={moviePreview}
                    alt={movie.nameRu}
                ></img>
            </Link>
            <div className="movie__info">
                <h2 className="movie__title">Gimme Danger: История Игги и The Stooges</h2>
                <button className="movie__like" type="button"></button>
            </div>
            <p className="movie__length">1ч42м</p>
        </div>
    );
}

export default MoviesCard;