import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies({ movies }) {
  return (
    <div className="container-movies">
    <main className='saved-movies'>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
    </div>
  )
}