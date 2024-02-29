import { useState } from "react";
  import Header from '../Header/Header';
import Main  from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Movies from "../Movies/Movies"
import { allMovies, savedMovies } from "../../utils/constants.js";
import Login from "../Login/Login"
import Register from "../Register/Register"
import Profile from '../Profile/Profile.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import SavedMovies from "../SavedMovies/SavedMovies.jsx";




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const path = useLocation().pathname;
  const navigate = useNavigate();
const visualHeaderPaths = ["/", "/movies", "/saved-movies", "/profile"];
const visualFooterPaths = ["/", "/movies", "/saved-movies"];

const goBack = () => {
  navigate(-1);
};
  return ( 
    <div className="app">
            {visualHeaderPaths.includes(path) && <Header isLoggedIn={isLoggedIn}/>}
            <Routes>
            <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
            <Route
              path="/"
              element={<Main />}
            ></Route>
            <Route path='/movies' element={<Movies movies={allMovies} />} />
            <Route
          path='/saved-movies'
          element={<SavedMovies movies={savedMovies} />}
        />
            <Route path='/profile' element={<Profile/>} />
            <Route path='*' element={<PageNotFound onReturn={goBack} />} />
            </Routes>
            {visualFooterPaths.includes(path) && <Footer />}
            </div>
  )
  }
export default App;