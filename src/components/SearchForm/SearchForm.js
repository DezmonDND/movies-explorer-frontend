import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
    return (
        <div className="search">
            <form className="search__container">
                <div className="search__form">
                    <input className="search__input" placeholder="Фильмы"></input>
                    <button className="search__button">Найти</button>
                    <span className="search__error"></span>
                </div>
                <FilterCheckbox></FilterCheckbox>
            </form>
        </div>
    );
}

export default SearchForm;