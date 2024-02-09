import React, { useEffect, useState } from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({ valueInput, setValueInput, shortMovies, setShortMovies }) {
    const [input, setInput] = useState("");

    useEffect(() => {
        setInput(valueInput);
    }, [valueInput])

    function handleChangeInput(e) {
        setInput(e.target.value);
    }

    function handleSearch(e) {
        if (e) {
            e.preventDefault();
        }
        setValueInput(input);
    }

    return (
        <div className="search">
            <form
                className="search__container"
            >
                <div className="search__form">
                    <input
                        type="text"
                        value={input}
                        onChange={handleChangeInput}
                        className="search__input"
                        placeholder="Фильм"
                        required
                    ></input>
                    <button
                        className="search__button"
                        type="submit"
                        onClick={handleSearch}
                    >Найти</button>
                    <span className="search__error"></span>
                </div>
                <FilterCheckbox
                    shortMovies={shortMovies}
                    setShortMovies={setShortMovies}
                    onCLick={handleSearch}
                ></FilterCheckbox>
            </form>
        </div>
    );
}

export default SearchForm;