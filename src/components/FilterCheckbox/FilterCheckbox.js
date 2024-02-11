import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ shortMoviesCheckbox, toggleCheckbox }) {
    
    return (
        <div className="checkbox">
            <input
                type="checkbox"
                id="checkbox"
                className="checkbox__switcher"
                checked={shortMoviesCheckbox}
                onChange={toggleCheckbox}
            ></input>
            <label htmlFor="checkbox"></label>
            <p className="checkbox__title">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;