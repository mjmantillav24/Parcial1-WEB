import { useMoviesStore } from "../store/useMoviesStore";
import Link from "next/link";

export default function MovieList() {
  const { movies } = useMoviesStore();

  return (
    <div className="grid grid-cols-3 gap-6">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <div className="border p-4 rounded shadow cursor-pointer hover:scale-105 transition">

            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-40 object-cover"
            />

            <h2 className="text-lg font-bold mt-2">
              {movie.title}
            </h2>

            <p>Country: {movie.country}</p>
            <p>Duration: {movie.duration} min</p>

            <p>
              Release: {new Date(movie.releaseDate).toLocaleDateString()}
            </p>

            <p>Popularity: {movie.popularity}</p>

          </div>
        </Link>
      ))}
    </div>
  );
}