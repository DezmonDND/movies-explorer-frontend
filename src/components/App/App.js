import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import AboutProject from '../AboutProject/AboutProject'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import AboutMe from '../AboutMe/AboutMe';
import Login from '../Login/Login'
import Register from '../Register/Register'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<AboutProject />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/saved-movies' element={<SavedMovies />}></Route>
        <Route path='/profile' element={<AboutMe />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
