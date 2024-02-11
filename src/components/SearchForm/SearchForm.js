import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from "../FormaValidator/FormaValidator";

function SearchForm({
    getMoviesFromServer,
    shortMoviesCheckbox,
    setShortMoviesCheckbox,
}) {
    const { values, handleChange, isValid } = useFormWithValidation();

    function toggleCheckbox() {
        const { movie } = values;
        if (shortMoviesCheckbox) {
            setShortMoviesCheckbox(false);
            getMoviesFromServer(movie || "");
        } else {
            setShortMoviesCheckbox(true);
            getMoviesFromServer(movie || "");
        }
    }

    function onSubmit(evt) {
        evt.preventDefault();
        const { movie } = values;
        getMoviesFromServer(movie);
    }

    return (
        <div className="search">
            <form className="search__container" onSubmit={onSubmit}>
                <div className="search__form">
                    <input
                        type="text"
                        onChange={handleChange}
                        className="search__input"
                        placeholder="Фильм"
                        name="movie"
                        required
                    ></input>
                    <button
                        className="search__button"
                        type="submit"
                        disabled={!isValid}
                        style={{
                            backgroundColor: !isValid ? "#F8F8F8" : "",
                            color: !isValid ? "#C2C2C2" : "",
                        }}
                    >
                        Найти
                    </button>
                    <span className="search__error"></span>
                </div>
                <FilterCheckbox
                    shortMoviesCheckbox={shortMoviesCheckbox}
                    toggleCheckbox={toggleCheckbox}
                ></FilterCheckbox>
            </form>
        </div>
    );
}

export default SearchForm;
