import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useEffect, useState } from "react";
import * as auth from "../../utils/Auth";
import { getToken, setToken, removeToken } from "../../utils/token";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import { mainApi } from "../../utils/MainApi";
import {
    INCORRECT_PASSWORD,
    UPDATE_ERROR,
    UPDATE_SUCCESS,
} from "../../utils/constants";

function App() {
    const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(undefined); // Чтобы не редиректило при обновлении страницы

    // Данные пользователя
    const [currentUser, setCurrentUser] = useState({});
    const [savedMovies, setSavedMovies] = useState([]);
    const [token, setTokenState] = useState(getToken());
    const [isSuccess, setIsSucces] = useState(true);
    const [requestInfo, setRequestInfo] = useState("");

    const navigate = useNavigate();

    // Получение данных с сервера и отрисовка
    useEffect(() => {
        if (loggedIn) {
            Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
                .then(([userData, cardData]) => {
                    setLoggedIn(true);
                    setCurrentUser(userData);
                    setSavedMovies(cardData);
                })
                .catch((e) => {
                    console.log(`Error! ${e}`);
                });
        }
    }, [loggedIn]);

    // Удалить карточку
    function handleCardDelete(movie) {
        mainApi
            .deleteMovie(movie._id)
            .then(() => {
                setSavedMovies((state) =>
                    state.filter((c) => c._id !== movie._id)
                );
            })
            .catch((e) => console.log(`Error! ${e}`));
    }

    // Поставить лайк
    function handleMovieLike(data) {
        const isSaved = savedMovies.some((movie) => movie.movieId === data.id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        if (!isSaved) {
            mainApi
                .saveNewMovie(data)
                .then((newCard) => {
                    setSavedMovies([...savedMovies, newCard]);
                })
                .catch((e) => {
                    console.log(`Error! ${e}`);
                });
        } else {
            const likedMovie = savedMovies.filter((movie) => {
                return movie.movieId === data.id;
            });
            const movieId = likedMovie[0]._id;
            mainApi
                .deleteMovie(movieId)
                .then(() => {
                    setSavedMovies((state) =>
                        state.filter((c) => c._id !== movieId)
                    );
                })
                .catch((e) => console.log(`Error! ${e}`));
        }
    }

    // Аутентификация
    function handleAutorize(email, password) {
        auth.autorize(email, password)
            .then((res) => {
                if (res && res.token) {
                    handleLogin(res);
                }
            })
            .catch((err) => {
                if (err.statusCose === 400) {
                    console.log("Не передано одно из полей");
                } else if (err.statusCose === 401) {
                    console.log("Пользователь с email не найден");
                }
                setRequestInfo(INCORRECT_PASSWORD);
            });
    }

    // Авторизация
    function handleLogin(userData) {
        setTokenState(userData.token);
        setToken(userData.token);
        setLoggedIn(true);
        navigate("/movies");
    }

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            setLoggedIn(false);
            return;
        }
        auth.getContent(token)
            .then((data) => {
                if (data) {
                    setLoggedIn(true);
                    setCurrentUser(data);
                } else {
                    setLoggedIn(false);
                }
            })
            .catch((e) => console.log(`Error! ${e}`));
    }, [navigate]);

    // Очистить ЛС при выходе
    function clearStorage() {
        localStorage.removeItem("allMovies");
        localStorage.removeItem("searchValue");
        localStorage.removeItem("shortMovies");
        localStorage.removeItem("shortMoviesChecked");
    }

    // Выход
    function handleLogout() {
        setLoggedIn(false);
        removeToken();
        clearStorage();
        navigate("/");
    }

    // Отмена редиректа в адресной строке при обновлении страницы
    if (loggedIn === undefined) {
        return null;
    }

    // Обновить данные пользователя
    function handleUpdateUser(inputValues) {
        mainApi
            .updateUserInfo(inputValues)
            .then((newUser) => {
                setCurrentUser(newUser);
                setRequestInfo(UPDATE_SUCCESS);
            })
            .catch((e) => {
                console.log(`Error! ${e}`);
                setRequestInfo(UPDATE_ERROR);
            });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                {["/", "/movies", "/saved-movies", "/profile"].includes(
                    location.pathname
                ) && <Header loggedIn={loggedIn}></Header>}
                <Routes>
                    {!loggedIn && (
                        <Route
                            path="/signin"
                            element={
                                <Login
                                    handleLogin={handleLogin}
                                    requestInfo={requestInfo}
                                    setRequestInfo={setRequestInfo}
                                    setLoggedIn={setLoggedIn}
                                    handleAutorize={handleAutorize}
                                />
                            }
                        ></Route>
                    )}
                    {!loggedIn && (
                        <Route
                            path="/signup"
                            element={
                                <Register
                                    handleLogin={handleLogin}
                                    isSuccess={isSuccess}
                                    setIsSucces={setIsSucces}
                                    requestInfo={requestInfo}
                                    setRequestInfo={setRequestInfo}
                                    setLoggedIn={setLoggedIn}
                                    handleAutorize={handleAutorize}
                                />
                            }
                        ></Route>
                    )}
                    <Route exact path="/" element={<Main />}></Route>
                    <Route
                        path="/movies"
                        element={
                            <ProtectedRouteElement
                                element={Movies}
                                loggedIn={loggedIn}
                                onCardLike={handleMovieLike}
                                savedMovies={savedMovies}
                            />
                        }
                    ></Route>
                    <Route
                        path="/saved-movies"
                        element={
                            <ProtectedRouteElement
                                element={SavedMovies}
                                loggedIn={loggedIn}
                                onCardDelete={handleCardDelete}
                                savedMovies={savedMovies}
                            />
                        }
                    ></Route>
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRouteElement
                                element={Profile}
                                loggedIn={loggedIn}
                                handleLogout={handleLogout}
                                onUpdateUser={handleUpdateUser}
                                requestInfo={requestInfo}
                                setRequestInfo={setRequestInfo}
                            />
                        }
                    ></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
                {["/", "/movies", "/saved-movies"].includes(
                    location.pathname
                ) && <Footer></Footer>}
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
