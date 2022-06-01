import { MovieCard } from "./MovieCard";

interface ContetProps {
  movies: any[];
}

export function Content({ movies }: ContetProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}