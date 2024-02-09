import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ shortMovies, setShortMovies, onCLick }) {
    
    function toggleCheckbox(e) {
        setShortMovies(e.target.checked);
        onCLick()
    }

    return (
        <div className="checkbox">
            <input
                type="checkbox"
                id="checkbox"
                className="checkbox__switcher"
                checked={shortMovies}
                onChange={toggleCheckbox}
            ></input>
            <label htmlFor="checkbox"></label>
            <p className="checkbox__title">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;