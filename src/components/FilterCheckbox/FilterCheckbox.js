import "./FilterCheckbox.css";

function FilterCheckbox({ shortMoviesCheckboxState, toggleCheckbox }) {
    return (
        <div className="checkbox">
            <input
                name="checkbox"
                type="checkbox"
                id="checkbox1"
                className="checkbox__switcher"
                checked={shortMoviesCheckboxState}
                onChange={toggleCheckbox}
            ></input>
            <label htmlFor="checkbox1"></label>
            <p className="checkbox__title">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
