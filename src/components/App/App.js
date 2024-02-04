import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {['/', '/movies', '/saved-movies', '/profile'].includes(location.pathname) && <Header></Header>}
      <Routes>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route exact path='/' element={<Main />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/saved-movies' element={<SavedMovies />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      {['/', '/movies', '/saved-movies'].includes(location.pathname) && <Footer></Footer>}
    </div>
  );
}

export default App;
