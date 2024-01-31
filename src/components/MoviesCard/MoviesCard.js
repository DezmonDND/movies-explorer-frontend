import React from "react";
import './MoviesCard.css';
import moviePreview from "../../images/movie_preview.svg"
import { Link } from "react-router-dom";

function MoviesCard() {
    return (
        <div className="movie">
            <Link className="movie__trailer-link" to="/">
                <img className="movie__image" src={moviePreview} alt="Превью фильма"></img>
            </Link>
            <div className="movie__info">
                <p className="movie__title">Gimme Danger: История Игги и The Stooges</p>
                <button className="movie__like" type="button"></button>
            </div>
            <p className="movie__length">1ч42м</p>
        </div>
    );
}

export default MoviesCard;