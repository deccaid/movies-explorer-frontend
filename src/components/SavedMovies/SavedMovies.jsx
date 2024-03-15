import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useMoviesContext } from "../../contexts/MoviesContext";
import { useState } from "react";

export default function SavedMovies({
  movies,
  onDeleteSave,
  checkSavedMovies,
}) {
  const { searched, setSearched } = useMoviesContext();

  const [searchQuerySave, setSearchQuerySave] = useState("");
  const [shortFilmSave, setShortFilmSave] = useState(false);

  const handleSearchChange = (query) => {
    setSearchQuerySave(query);
    setSearched(true);
  };

  const handleShortFilmChange = (checked) => {
    setShortFilmSave(checked);
    localStorage.setItem("shortFilmSave", checked);
  };

  return (
    <div className="container-movies">
      <main className="saved-movies">
        <SearchForm
          onSearch={handleSearchChange}
          onShortFilmChange={handleShortFilmChange}
          shortFilm={shortFilmSave}
        />
        <MoviesCardList
          onDeleteSave={onDeleteSave}
          searched={searched}
          movies={movies}
          searchQuery={searchQuerySave}
          shortFilm={shortFilmSave}
          checkSavedMovies={checkSavedMovies}
        />
      </main>
    </div>
  );
}
