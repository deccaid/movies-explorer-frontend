import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({
  setSearchInputValue,
  searchInputValue,
  setIsLoading,
  isShortFilm,
  setIsShortFilm,
  isLoading,
  handleLikeMovie,
  movies,
  savedMovies,
  setSavedMovies,
  serverError,
}) => {
  return (
    <div className="container-movies">
      <SearchForm 
        setSearchInputValue={setSearchInputValue}
        searchInputValue={searchInputValue}
        setIsLoading={setIsLoading}
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}/>
        <MoviesCardList
       serverError={serverError}
       handleLikeMovie={handleLikeMovie}
       movies={movies}
       searchInputValue={searchInputValue}
       isShortFilm={isShortFilm}
       savedMovies={savedMovies}
      />
    </div>
  );
};

export default Movies;
