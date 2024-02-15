import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from "../FormaValidator/FormaValidator";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

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
    const { values, handleChange, resetForm } = useFormWithValidation();
    const location = useLocation();
    const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);

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
        if (allMovies.length === 0) {
            setIsFirstSearch(true);
        }
        // else
        if (values.search === "" || values.search === undefined) {
            setInfoTooltipPopupOpen(true);
        } else {
            getMoviesFromServer(values.search);
        }
    }

    // Закрытие всех попапов
    const closeAllPopups = () => {
        setInfoTooltipPopupOpen(false);
    };

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
            <InfoTooltip
                isOpen={isInfoTooltipPopupOpen}
                onClose={closeAllPopups}
                message={"Введите название фильма для поиска"}
            />
        </div>
    );
}

export default SearchForm;
