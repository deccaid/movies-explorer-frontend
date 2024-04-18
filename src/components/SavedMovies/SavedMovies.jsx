import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from 'react';

export default function SavedMovies({
  setSearchInputValue,
  searchInputValue,
  setIsLoading,
  // isShortFilm,
  // setIsShortFilm,
  handleLikeMovie,
  movies,
  savedMovies,
  setSavedMovies,
  serverError,
  isShortSavedFilm,
  setIsShortSavedFilm,
}) {
  const [shortFilmSave, setShortFilmSave] = useState(false);

  const handleShortFilmChange = (checked) => {
    setShortFilmSave(checked);
  };
  return (
    <div className="container-movies">
      <main className="saved-movies">
        <SearchForm
            setSearchInputValue={setSearchInputValue}
            searchInputValue={searchInputValue}
            setIsLoading={setIsLoading}
            isShortFilm={shortFilmSave}
            setIsShortFilm={setShortFilmSave}
            isShortSavedFilm={shortFilmSave}
            setIsShortSavedFilm={setShortFilmSave}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            onShortFilmChange={handleShortFilmChange}
        />
        <MoviesCardList
            serverError={serverError}
            handleLikeMovie={handleLikeMovie}
            movies={movies}
            searchInputValue={searchInputValue}
            isShortFilm={shortFilmSave}
            savedMovies={savedMovies}
            isShortSavedFilm={shortFilmSave}
        />
      </main>
    </div>
  );
}
