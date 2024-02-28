import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies({ movies }) {
  return (
    <div className="container">
    <main className='saved-movies'>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
    </div>
  )
}