import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from '../Main/Main';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Main />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/saved-movies' element={<SavedMovies />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
