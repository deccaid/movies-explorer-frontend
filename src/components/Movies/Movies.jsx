import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({ movies }) => {

  return (
    <div className="container-movies">
      <SearchForm/>
      <MoviesCardList movies={movies} />
      </div>
      
      
  );
};

export default Movies;
