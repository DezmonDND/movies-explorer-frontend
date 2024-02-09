import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { useEffect, useState } from 'react';
import * as auth from "../../utils/Auth";
import { getToken, setToken, removeToken } from "../../utils/token";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { mainApi } from '../../utils/MainApi';

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(undefined); // Чтобы не редиректило при обновлении страницы

  // Данные пользователя
  const [currentUser, setCurrentUser] = useState({});
  const [token, setTokenState] = useState(getToken());

  const navigate = useNavigate();

  // Авторизация
  function handleLogin(userData) {
    setTokenState(userData.token)
    setToken(userData.token)
    setLoggedIn(true);
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      setLoggedIn(false);
      return;
    }
    auth.getContent(token).then((data) => {
      if (data) {
        setLoggedIn(true);
        setCurrentUser(data)
      } else {
        setLoggedIn(false);
      }
    })
      .catch((e) => console.log(`Error! ${e}`));
  }, [navigate]);

  // Выход
  function handleLogout() {
    setLoggedIn(false);
    removeToken();
  }

  // Отмена редиректа в адресной строке при обновлении страницы
  if (loggedIn === undefined) {
    return null;
  }

  // Обновить данные пользователя
  function handleUpdateUser(inputValues) {
    mainApi.updateUserInfo(inputValues)
      .then((newUser) => {
        setCurrentUser(newUser);
      })
      .catch((e) => console.log(`Error! ${e}`))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {['/', '/movies', '/saved-movies', '/profile'].includes(location.pathname) && <Header
          loggedIn={loggedIn}
        ></Header>}
        <Routes>
          <Route
            path='/signin'
            element={
              <Login
                handleLogin={handleLogin}
              />}></Route>
          <Route path='/signup' element={<Register />}></Route>
          <Route exact path='/' element={<Main />}></Route>
          <Route path='/movies'
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
              />
            }></Route>
          <Route path='/saved-movies'
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}
              />
            }></Route>
          <Route path='/profile'
            element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                handleLogout={handleLogout}
                onUpdateUser={handleUpdateUser}
              />
            }></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
        {['/', '/movies', '/saved-movies'].includes(location.pathname) && <Footer></Footer>}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
