import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useMoviesContext } from "../../contexts/MoviesContext";

const Movies = ({
  movies,
  onToggleSave,
  onDeleteSave,
  checkSavedMovies,
  getMovies,
  
}) => {
  const {
    searchQuery,
    setSearchQuery,
    shortFilm,
    setShortFilm,
    searched,
    setSearched,
  } = useMoviesContext();


  
  const handleSearchChange = (query) => {
    if (!searched) {
      getMovies();
      setSearched(true);
    }
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  const handleShortFilmChange = (checked) => {
    setShortFilm(checked);
  };
  return (
    <div className="container-movies">
      <SearchForm 
        searchQuery={searchQuery}
        onSearch={handleSearchChange}
        onShortFilmChange={handleShortFilmChange}
        shortFilm={shortFilm} />
        <MoviesCardList
        checkSavedMovies={checkSavedMovies}
        onDeleteSave={onDeleteSave}
        onToggleSave={onToggleSave}
        searched={searched}
        movies={movies}
        searchQuery={searchQuery}
        shortFilm={shortFilm}
      />
    </div>
  );
};

export default Movies;
