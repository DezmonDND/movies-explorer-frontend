import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from "../FormaValidator/FormaValidator";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function SearchForm({
    getMoviesFromServer,
    shortMoviesCheckboxState,
    setShortMoviesCheckboxState,
    findMovies,
    isFirstSearch,
    setIsFirstSearch,
    allMovies,
    searchValueState,
}) {
    const { values, handleChange, isValid, resetForm, errors } =
        useFormWithValidation();
    const location = useLocation();

    function toggleCheckbox() {
        if (shortMoviesCheckboxState) {
            setShortMoviesCheckboxState(false);
            findMovies(values.search || "", false, allMovies);
        } else {
            setShortMoviesCheckboxState(true);
            findMovies(values.search || "", true, allMovies);
        }
    }

    function onSubmit(evt) {
        evt.preventDefault();
        if (isFirstSearch) {
            setIsFirstSearch(false);
        } else if (values.search === "") {
            console.log("1");
        } else {
            getMoviesFromServer(evt.target.search.value);
        }
    }

    useEffect(() => {
        location.pathname === "/movies" &&
            resetForm({ search: searchValueState });
    }, [searchValueState, resetForm, location.pathname]);

    return (
        <div className="search">
            <form className="search__container" onSubmit={onSubmit}>
                <div className="search__form">
                    <input
                        type="text"
                        name="search"
                        placeholder="Фильм"
                        className="search__input"
                        value={values.search || ""}
                        onChange={handleChange}
                    ></input>
                    <button className="search__button" type="submit">
                        Найти
                    </button>
                    <span className="search__error"></span>
                </div>
                <FilterCheckbox
                    shortMoviesCheckboxState={shortMoviesCheckboxState}
                    toggleCheckbox={toggleCheckbox}
                ></FilterCheckbox>
            </form>
        </div>
    );
}

export default SearchForm;
