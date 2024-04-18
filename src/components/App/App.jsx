
  import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

import React from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import ProtectedRoutes from "../ReverseProtectedRoute/ReverseProtectedRoute";
import api from "../../utils/MainApi";
import { auth } from "../../utils/auth.js";
import Preloader from "../Preloader/Preloader";
import { getMovies } from '../../utils/MoviesApi.js';
import { correctMovieFormat } from '../../utils/utils.jsx';






const App = () => {
  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];
  const navigate = useNavigate();
  const [serverError, setServerError] = useState({
    isValid: false,
    text: '',
  });
  const [searchInputValue, setSearchInputValue] = useState(localStorage.getItem('searchInputValue') ?? ''); // значение поисковой строки на странице "Фильмы"
  const [searchSavedInputValue, setSearchSavedInputValue] = useState(
    localStorage.getItem('searchSavedInputValue') ?? ''
  );
  const [isShortFilm, setIsShortFilm] =  useState(localStorage.getItem('isShortFilm') === 'true');
  const [isShortSavedFilm, setIsShortSavedFilm] = useState(false);
  

  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);


  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUser(localStorage.getItem('jwt'))])
        .then(([dataUserInfo]) => {  
          setCurrentUser(dataUserInfo)
          setLoggedIn(true)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [loggedIn])

  function handleRegister(name, email, password ) {
    return auth
      .registration(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function handleLogin(email, password) {
    return auth
      .Login(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(`${err}`);
        setLoginError(`Ошибка авторизации`);
       
      })
  }


  function handleUpdateUser(userData, setIsErrorSending, setIsDoneSending, token) {
    return api
      .setInfoProfile(userData, token)
      .then((newUserData) => {
        if (newUserData.status === 409) {
          setIsErrorSending(true);
          setTimeout(() => {
            setIsErrorSending(false);
          }, 2000);
          throw new Error('Error updating user data');
        } else {
          setCurrentUser(newUserData);  
          setIsDoneSending(true);
          setTimeout(() => {
            setIsDoneSending(false);
          }, 2000); // устанавливаем таймер на 5 секунд
        }
      })
      .catch((err) => {
        setIsErrorSending(true);
      });
  }

  function handleLogout() {
    api
      .signOut()
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        setSavedMovies([]);
      })
      .catch((err) => {
        console.log(`${ err }`);
        setLoggedIn(false);
        setSavedMovies([]);
      });
  }
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
 
      auth.checkToken(jwt).then((res) => {
        if (res) {       
          setLoggedIn(true);
          navigate("/movies");          
        }
      })
        .catch((error) => {
          console.log(error)
        });
    } else {
      setLoggedIn(false);
    }

  }, []);

  const getAllMovies = () => {
    setIsLoading(true);
    getMovies().then((arrayWithNewCards) => {
        localStorage.setItem('allMovies', JSON.stringify(arrayWithNewCards));
        setMovies(arrayWithNewCards.map((movie) => correctMovieFormat(movie)));
    }).catch((e) => {
        console.error(e?.reason || e?.message);
    }).finally(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    });
};

const getLikedMovies = () => {
  setIsLoading(true); 
  api.getSavedMovies().then((allSavedMovies) => {
      if (allSavedMovies) { 
          setSavedMovies(allSavedMovies); 
      } else { 
          console.log('Сохраненные фильмы отсутствуют'); 
      }
  }).catch((e) => { 
      console.log("Ошибка: ", e); 
  }).finally(() => { 
      setIsLoading(false); 
  }); 
};

  const handleLikeMovie = (movie) => {
    const savedMovieIndex = savedMovies.findIndex((m) => m.movieId === movie.movieId);
    const savedMovieId = savedMovies[savedMovieIndex]?._id;
    savedMovieIndex === -1
      ? api
          .savedMovie(movie)
          .then((res) => {
            setSavedMovies((prev) => prev.concat(res));
          })
          .catch((e) => {
            console.error(e?.reason || e?.message);
          })
      : api
          .deleteMovie(savedMovieId)
          .then(() => {
            setSavedMovies((prev) => prev.filter((obj) => obj.movieId !== movie.movieId));
          })
          .catch((e) => {
            console.error(e?.reason || e?.message);
          });
  };
  useEffect(() => {
    if (!localStorage.getItem('jwt')) return;
    getAllMovies();
    getLikedMovies();
    localStorage.getItem('allMovies', movies);
    localStorage.getItem('allSavedMovies', savedMovies);
  }, [loggedIn]);




  // Отрисовка
  if (isLoading) {
    return <Preloader />;
  }
  return ( 
    <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
          {headerPaths.includes(path) && (
            <Header
              isLoggedIn={loggedIn}
            
            />
          )}
          <Routes>
           <Route element={<ProtectedRoutes isLoggedIn={!loggedIn} />}>
              <Route
                path="/signin"
                element={
                  <Login
                    handleLogin={handleLogin}
                    errorMessage={loginError}
                    title="Вход"
                    buttonText="Войти"
                  />
                }
              ></Route>
              <Route
                path="/signup"
                element={
                  <Register
                    handleRegister={handleRegister}
                    title={'Регистрация'}
                    buttonText={'Зарегистрироваться'}
                  />
                }
              ></Route>
            </Route>
            <Route
              path="/"
              element={<Main />}
            ></Route>

            <Route element={<ProtectedRoutes isLoggedIn={loggedIn} />}>
              <Route
                path="/movies"
                element={
                  <Movies
                  serverError={serverError}
                  setSearchInputValue={setSearchInputValue}
                  searchInputValue={searchInputValue}
                  setIsLoading={setIsLoading}
                  isShortFilm={isShortFilm}
                  setIsShortFilm={setIsShortFilm}
                  isLoading={isLoading}
                  handleLikeMovie={handleLikeMovie}
                  movies={movies}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  />
                }
              ></Route>
              <Route
                path="/saved-movies"
                element={
                  <SavedMovies
                  isShortSavedFilm={isShortSavedFilm}
                  setIsShortSavedFilm={setIsShortSavedFilm}
                  setSearchInputValue={setSearchSavedInputValue}
                  searchInputValue={searchSavedInputValue}
                  serverError={serverError}
                  setIsLoading={setIsLoading}
                  isShortFilm={isShortFilm}
                  setIsShortFilm={setIsShortFilm}
                  isLoading={isLoading}
                  handleLikeMovie={handleLikeMovie}
                  movies={savedMovies}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  />
                }
              ></Route>

              <Route
                path="/profile"
                element={
                  <Profile
                    onLogOut={handleLogout}
                    updateUser={handleUpdateUser}
                  />
                }
              ></Route>
              <Route
                path="*"
                element={<PageNotFound onBack={goBack} />}
              />
            </Route>
          </Routes>
          {footerPaths.includes(path) && <Footer />}
        </div>
    </CurrentUserContext.Provider>
  )
  }
export default App;