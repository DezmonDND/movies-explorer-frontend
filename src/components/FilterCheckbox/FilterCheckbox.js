import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="checkbox">
            <input type="checkbox" id="checkbox" class="checkbox__switcher"></input>
            <label for="checkbox"></label>
            <p className="checkbox__title">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;