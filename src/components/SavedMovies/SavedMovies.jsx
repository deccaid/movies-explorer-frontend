import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({
  setSearchInputValue,
  searchInputValue,
  setIsLoading,
  isShortFilm,
  setIsShortFilm,
  handleLikeMovie,
  movies,
  savedMovies,
  setSavedMovies,
  serverError,
  isShortSavedFilm,
  setIsShortSavedFilm,
}) {
  return (
    <div className="container-movies">
      <main className="saved-movies">
        <SearchForm
            setSearchInputValue={setSearchInputValue}
            searchInputValue={searchInputValue}
            setIsLoading={setIsLoading}
            isShortFilm={isShortFilm}
            setIsShortFilm={setIsShortFilm}
            isShortSavedFilm={isShortSavedFilm}
            setIsShortSavedFilm={setIsShortSavedFilm}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
        />
        <MoviesCardList
            serverError={serverError}
            handleLikeMovie={handleLikeMovie}
            movies={movies}
            searchInputValue={searchInputValue}
            isShortFilm={isShortFilm}
            savedMovies={savedMovies}
            isShortSavedFilm={isShortSavedFilm}
        />
      </main>
    </div>
  );
}
