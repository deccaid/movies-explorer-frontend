import React, { useMemo, useState, useEffect, useRef } from "react";
import MoviesCard from "../MovieCard/MovieCard";
import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import { getmoviesPage } from "../../utils/utils";
import {
  SCREEN_1150,
  SCREEN_800,
  SCREEN_650,
  MOVIES_4_ADD,
  MOVIES_3_ADD,
  MOVIES_2_ADD,
  RESIZE_DELAY,
  SHORT_FILM_DURATION,
} from "../../utils/constants";

export default function MoviesCardList({
  serverError,
  handleLikeMovie,
  movies,
  searchInputValue,
  isShortFilm,
  savedMovies,
  isShortSavedFilm,
}) {
  const location = useLocation();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [moviesPage, setMoviesPage] = useState(
    getmoviesPage(screenWidth)
  );

  const filteredMoviesList = useMemo(() => {  
    if (!searchInputValue && location.pathname === "/movies") {  
      return [];  
    }       
      setMoviesPage(getmoviesPage(screenWidth));
    const filtredMovies = movies.filter((movie) => {  
      const currentIsShort = location.pathname === '/movies' ? isShortFilm : isShortSavedFilm;
      if (currentIsShort && movie.duration > SHORT_FILM_DURATION) {
        return false;
      }
      const movieNameRU = (movie.nameRU || '').toLowerCase();  
      const movieNameEN = (movie.nameEN || '').toLowerCase();  
  
      const query = searchInputValue || '';  
      const includesSearchQuery =  
        movieNameRU.includes(query.toLowerCase()) ||  
        movieNameEN.includes(query.toLowerCase());  
  
      return includesSearchQuery && (!isShortFilm || movie.duration <= 40);  
    });  
      
    localStorage.setItem("filteredMoviesList", JSON.stringify(filtredMovies));  
  
    return filtredMovies;  
  }, [searchInputValue, location.pathname, movies,isShortFilm, isShortSavedFilm]);

  let visibleMovies;
  location.pathname === "/movies"
    ? (visibleMovies = filteredMoviesList.slice(0, moviesPage))
    : (visibleMovies = filteredMoviesList);

  const handleMoreClick = () => {
    let moviesToAdd =
      screenWidth > SCREEN_1150
        ? MOVIES_3_ADD
        : screenWidth > SCREEN_800
        ? MOVIES_2_ADD
        : screenWidth > SCREEN_650
        ? MOVIES_2_ADD
        : MOVIES_2_ADD;

    setMoviesPage((prevCount) => prevCount + moviesToAdd);
  };

  const timer = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      const newmoviesPage = getmoviesPage(newScreenWidth);
      if (
        screenWidth !== newScreenWidth ||
        moviesPage !== newmoviesPage
      ) {
        setScreenWidth(newScreenWidth);
        setMoviesPage(newmoviesPage);
      }
    };
    window.addEventListener("resize", () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(handleResize, RESIZE_DELAY);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [timer, screenWidth, moviesPage]);
  return (
    <>
      {serverError.isValid ? (
        <h2 className="movies-error-title">Введите название фильма</h2>
      ) : (
        <>
          <section className="card-list__block">
            {filteredMoviesList.length > 0 ? (
              visibleMovies.map((movie, index) => (
                <MoviesCard
                  index={index + 1}
                  movie={movie}
                  key={movie.movieId}
                  name={movie.nameRU}
                  savedMovies={savedMovies}
                  handleLikeMovie={handleLikeMovie}
                />
              ))
            ) : (
              <>
                <h2 className="error">
                  {location.pathname === "/saved-movies"
                    ? filteredMoviesList.length === 0 && movies.length > 0
                      ? "Ничего не найдено"
                      : "У Вас нет сохраненных фильмов."
                    : searchInputValue &&
                      filteredMoviesList.length === 0 &&
                      movies.length > 0
                    ? "Ничего не найдено"
                    : ""}
                </h2>
              </>
            )}
          </section>
          {filteredMoviesList.length > moviesPage &&
            location.pathname === "/movies" && (             
                <button
                  className="card-list__more"
                  type="button"
                  onClick={handleMoreClick}
                >
                  Ещё
                </button>
  
            )}
        </>
      )}
    </>
  );
}
