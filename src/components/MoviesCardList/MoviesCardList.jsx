import MovieCard from "../MovieCard/MovieCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ movies }) {
  return (
    <section className="card-list">
      <ul className="card-list__block">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </ul>
      <button className="card-list__more">Ещё</button>
    </section>
  );
}